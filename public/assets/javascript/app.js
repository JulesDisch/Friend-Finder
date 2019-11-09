var userScore = 0;
var currentUserScore = 0;
var newArr = [];
var dogsArr = [];
var matchImg;

$("#submit").on("click", function (event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
        var isValid = true;
        $(".required").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
        // Create an object for the user's data
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
                $("#question10").val(),
                $("#question11").val(),
                $("#question12").val()
            ]
        };

        // AJAX post the data to the dogs API.
        $.post("/api/dogs", userData, function (data) {
           
        });
        runDogQuery()
       

        function runDogQuery() {
            // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
            $.ajax({ url: "/api/dogs", method: "GET" })
                .then(function (dogData) {
                    console.log(dogData);
                    console.log(newArr[0])
                    console.log("------------------------------------");
                    for (var i = 0; i < 11; i++) {
                        for (var j = 0; j < newArr.length; j++) {
                            if (newArr[j] === dogData[i].scores[j]) {
                                dogsArr.push(dogData[i])
                                console.log(dogData[i].name)
                            }
                        }
                    }
                    console.log(dogsArr)
                    var counts = {};
                    var compare = 0;
                    var mostFrequent;
                    (function (array) {
                        for (var i = 0, len = array.length; i < len; i++) {
                            var word = array[i].name;

                            if (counts[word] === undefined) {
                                counts[word] = 1;
                            } else {
                                counts[word] = counts[word] + 1;
                            }
                            if (counts[word] > compare) {
                                compare = counts[word];
                                mostFrequent = dogsArr[i].name;
                                mostFrequentImg = dogsArr[i].photo;
                            }
                            $("#match-name").text(mostFrequent);
                            $("#match-image").attr("src", "assets/images/" + mostFrequentImg);
                        }
                        return console.log(mostFrequent);
                    })(dogsArr);
                });
        }
        console.log(userData.scores)
        for (var i = 0; i < userData.scores.length; i++) {
            newArr.push(parseInt(userData.scores[i]));
        }
        console.log(newArr)
        console.log(userScore);
        resultsModal();
    } else {
        fillRequiredModal();
    }
});

function resultsModal() {
    var resultModal = document.getElementById("results-modal");
    var closeBtn = document.getElementById("closed");
    var span2 = document.getElementsByClassName("close2")[0];
    resultModal.style.display = "block";
    closeBtn.onclick = function () {
        resultModal.style.display = "none";
        $("#question1").val(""),
        $("#question2").val(""),
        $("#question3").val(""),
        $("#question4").val(""),
        $("#question5").val(""),
        $("#question6").val(""),
        $("#question7").val(""),
        $("#question8").val(""),
        $("#question9").val(""),
        $("#question10").val(""),
        $("#question11").val(""),
        $("#question12").val("");
        newArr = [];
        dogsArr = []
       
    }

    span2.onclick = function () {
        resultModal.style.display = "none";
        $("#question1").val(""),
        $("#question2").val(""),
        $("#question3").val(""),
        $("#question4").val(""),
        $("#question5").val(""),
        $("#question6").val(""),
        $("#question7").val(""),
        $("#question8").val(""),
        $("#question9").val(""),
        $("#question10").val(""),
        $("#question11").val(""),
        $("#question12").val("");
        newArr = [];
        dogsArr = []
        
    }

    window.onclick = function (event) {
        if (event.target == resultModal) {
            resultModal.style.display = "none";
            $("#question1").val(""),
            $("#question2").val(""),
            $("#question3").val(""),
            $("#question4").val(""),
            $("#question5").val(""),
            $("#question6").val(""),
            $("#question7").val(""),
            $("#question8").val(""),
            $("#question9").val(""),
            $("#question10").val(""),
            $("#question11").val(""),
            $("#question12").val("");
            newArr = [];
            dogsArr = []
            
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