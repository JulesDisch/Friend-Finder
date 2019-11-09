// ===============================================================================
// DATA
// Below data will hold all of the available dogs that we will score against the customer.
// ===============================================================================

var dogArray = [
    {
      name: "Papillon",
      photo: "Papillon-On-White-01.jpg",
      scores: [
        4,
        2,
        1,
        1,
        3,
        2,
        4,
        2,
        1,
        3,
        1,
        3,
      ],
    }
    ,
    {
      name: "Affenpinser",
      photo: "Affenpinscher-copy.jpg",
      scores: [
        2,
        2,
        1,
        1,
        1, 
        2,
        4,
        3,
        1,
        3,
        2,
        3,
      ],
    },
    {
      name: "Bichon Frise",
      photo: "Bichon-Frise-On-White-03.jpg",
      scores: [
        2,
        1,
        1,
        1,
        3,
        1,
        4,
        1,
        2,
        4,
        1,
        3
      ],
    },
    {
      name: "Akita",
      photo: "Akita-On-White-01.jpg",
      scores: [
        4,
        4,
        1,
        1,
        1,
        4,
        4,
        3,
        5,
        4,
        3,
        2
      ],
    },
    {
      name: "Afghan Hound",
      photo: "Afghan-Hound1.jpg",
      scores: [
        5,
        4,
        1,
        1,
        1,
        4,
        4,
        3,
        4,
        2,
        3,
        1
      ],
    },
    {
      name: "Australian Shepherd",
      photo: "Australian-Shepherd.1.jpg",
      scores: [
        5,
        3,
        1,
        1,
        3,
        3,
        4,
        1,
        3,
        3,
        2,
        3
      ],
    },
    {
      name: "Greyhound",
      photo: "Greyhound-MP.jpg",
      scores: [
        3,
        4,
        1,
        1,
        1,
        2,
        4,
        1,
        3,
        4,
        3,
        1
      ],
    },
    {
      name: "Chow Chow",
      photo: "Chow-Chow-On-White-01.jpg",
      scores: [
        1,
        2,
        4,
        1,
        3,
        4,
        4,
        2,
        3,
        2,
        3,
        2
      ],
    },
    {
      name: "Siberian Husky",
      photo: "Siberian-Husky-On-White-03.jpg",
      scores: [
        5,
        4,
        1,
        1,
        2,
        4,
        4,
        3,
        3,
        4,
        2,
        3
      ],
    },{
      name: "Great Dane",
      photo: "Great-Dane-On-White-01.jpg",
      scores: [
        2,
        4,
        2,
        1,
        3,
        4,
        4,
        2,
        5,
        4,
        3,
        3
      ],
    },
    {
      name: "Dalmatian",
      photo: "Dalmatian-On-White-01.jpg",
      scores: [
        5,
        4,
        2,
        1,
        2,
        4,
        4,
        2,
        3,
        3,
        3,
        2
      ],
    },

    {
      name: "Newfoundland",
      photo: "Newfoundland-onWhite-012-1.jpg",
      scores: [
        3,
        4,
        1,
        1,
        3,
        4,
        4,
        1,
        5,
        3,
        2,
        2
      ],
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = dogArray;
  