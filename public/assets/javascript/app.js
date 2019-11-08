

// Chosen CSS
// var config = {
//   ".chosen-select": {},
//   ".chosen-select-deselect": {
//     allow_single_deselect: true
//   },
//   ".chosen-select-no-single": {
//     disable_search_threshold: 10
//   },
//   ".chosen-select-no-results": {
//     no_results_text: "Oops, nothing found!"
//   },
//   ".chosen-select-width": {
//     width: "95%"
//   }
// };

// for (var selector in config) {
//   $(selector).chosen(config[selector]);
// }

// Capture the form inputs
$("#submit").on("click", function(event) {
  event.preventDefault();

  // Form validation
  function validateForm() {
    var isValid = true;
    $(".required").each(function() {
      if ($(this).val() === "") {
        isValid = false;
        console.log("oops")
      }
    });

    $(".chosen-select").each(function() {

      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  // If all required fields are filled
  if (validateForm()) {
    // Create an object for the user"s data
    var userData = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#question1").val(),
        $("#question2").val(),
        $("#question3").val(),
        $("#question4").val(),
        $("#question5").val(),
        $("#question6").val(),
        $("#question7").val(),
        $("#question8").val(),
        $("#question9").val(),
        $("#question10").val()
      ]
    };

    // AJAX post the data to the dogs API.
    $.post("/api/dogs", userData, function(data) {

      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      $("#match-name").text(data.name);
      $("#match-img").attr("src", data.photo);

      // Show the modal with the best match
     

    });

    resultsModal();
  } else {
      fillRequiredModal();
    
  }
});




function restart() {
    questionsLeft--;
    number = 30;
    $("#show-number").html(number);
    run();
}



function resultsModal() {
    console.log("yep!")
    var resultModal = document.getElementById("results-modal");
    var closeBtn = document.getElementById("close");
    var span = document.getElementsByClassName("close")[0];
    resultModal.style.display = "block";
    closeBtn.onclick = function () {
        resultModal.style.display = "none";
    }

    span.onclick = function () {
        resultModal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == resultModal) {
            resultModal.style.display = "none";
        }
    }
}

function fillRequiredModal() {
   
    var reqModal = document.getElementById("fillRequired");
    var okBtn = document.getElementById("ok");
    var span = document.getElementsByClassName("close")[0];
    reqModal.style.display = "block";
    okBtn.onclick = function () {
        reqModal.style.display = "none";  
    }

    span.onclick = function () {
        reqModal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == reqModal) {
            reqModal.style.display = "none";
        }
    }
}

function renderTrivia() {
    this.triviaUsed = objKeys[j];
    if (j === 10) {
        gameOverModal();
    } else {
        document.querySelector("#trivia-question").innerHTML = this.triviaChoices[this.triviaUsed].question;
        $("#correctText").html("<h2>Correct answers: " + correct + "</h2>");
        $("#wrongText").html("<h2>Wrong answers: " + wrong + "</h2>");
        $("#unansweredText").html("<h2>Unanswered: " + unanswered + "</h2>");
        $("#questionsleftText").html("<h2>Questions left: " + questionsLeft + "</h2>");
        for (var i = 0; i < this.triviaChoices[this.triviaUsed].answers.length; i++) {
            var answerBtn = $("<button>");
            answerBtn.addClass("answer-button");
            answerBtn.attr("data-answer", this.triviaChoices[this.triviaUsed].answers[i]);
            answerBtn.text(this.triviaChoices[this.triviaUsed].answers[i]);
            if ((this.triviaChoices[this.triviaUsed].answers[i]) === (this.triviaChoices[this.triviaUsed].correctAnswer)) {
                answerBtn.attr("data-correct", "true");
            } else {
                answerBtn.attr("data-correct", "false");
            }
            $("#buttons").append(answerBtn);
        }

        $(".answer-button").on("click", function () {
            var Answer = $("<div>");
            var rightAnswer = $(this).attr("data-correct");
            Answer.text($(this).attr("data-answer"));
            $("#buttons").empty();
            stop();
            if (rightAnswer === "true") {
                correct++
                $("#trivia-question").append("<h2>" + $(this).attr("data-answer") + " is right</h2>");
                $("#trivia-question").append("<img src='assets/images/" + triviaChoices[triviaUsed].picture + "' alt='" + triviaChoices[triviaUsed].correctAnswer + "'>");
                setTimeout(function () { restart(); }, 2000);
                j++;
            } else {
                wrong++
                $("#trivia-question").append(
                    "<h2>" + $(this).attr("data-answer") + " is wrong</h2>");
                $("#trivia-question").append("<h2> The correct answer is " + triviaChoices[triviaUsed].correctAnswer + "</h2>");
                $("#trivia-question").append("<img src='assets/images/" + triviaChoices[triviaUsed].picture + "' alt='" + triviaChoices[triviaUsed].correctAnswer + "'>");
                setTimeout(function () { restart(); }, 2000);
                j++;
            };
        })
    }
};

$("#start").on("click", run);

function run() {
    if (!clockRunning) {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
        $("#help").hide();
        decrement();
        renderTrivia();
    }
}

function decrement() {
    number--;
    $("#countdown").show();
    $("#show-number").html(number);
    if (number === 0) {
        timesUpModal();
    }
}

function stop() {
    clearInterval(intervalId);
    clockRunning = false;
}