const express = require("express");
const app = express();
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const path = require("path");

const port = 8080;

// ----------------------------
// Express App Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
  const mlProjects = [
    {
      title: "Movie Prediction",
      description: "Predict movie ratings and success using ML",
      tech: "Python, Scikit-learn",
      tags: "ML, Prediction",
      link: "https://yourdomain.com/movie-prediction",
      img: "https://i.pinimg.com/474x/59/f8/69/59f8694cb223061869e203bb38c059ed.jpg"
    },
    {
      title: "Movie Prediction",
      description: "Predict movie ratings and success using ML",
      tech: "Python, Scikit-learn",
      tags: "ML, Prediction",
      link: "https://yourdomain.com/movie-prediction",
      img: "https://i.pinimg.com/474x/59/f8/69/59f8694cb223061869e203bb38c059ed.jpg"
    }
  ];

  const mernProjects = [
    {
      title: "CampusPay",
      description: "An electronic wallet card for college students",
      tech: "MERN Stack",
      tags: "Payments, College",
      link: "https://campusspay.netlify.app/",
      img: "https://ik.imagekit.io/nyeng5bmu/campuspay.png?updatedAt=1759407013888"
    },
    {
      title: "SmartPrint",
      description: "Smart printing solution for smart campuses",
      tech: "MERN Stack",
      tags: "Printing, IoT",
      link: "https://smart-printt.netlify.app/",
      img: "https://ik.imagekit.io/nyeng5bmu/smartprint.png?updatedAt=1759409933090"
    },
    {
      title: "DeeprajCreation",
      description: "A live e-commerce website in real use",
      tech: "MERN Stack",
      tags: "E-commerce",
      link: "https://deepraj-creation.vercel.app/deeprajcreation",
      img: "https://ik.imagekit.io/nyeng5bmu/deeprajc.png?updatedAt=1759410114126"
    },
    {
      title: "DabbaTracker",
      description: "Track your tiffin easily and efficiently",
      tech: "MERN Stack",
      tags: "Food, Tracking",
      link: "https://yourdomain.com/dabbatracker",
      img: "https://ik.imagekit.io/nyeng5bmu/1000392181.jpg?updatedAt=1759411160854"
    }
  ];

  res.render("page/home", { mernProjects, mlProjects });
});

// Games Route
app.get("/games", (req, res) => {
  const games = [
    {
      title: "Snake Game",
      link: "https://snake-game-ashy-xi.vercel.app/",
      img: "https://ik.imagekit.io/nyeng5bmu/snake.jpg?updatedAt=1759405328647"
    },
    {
      title: "Tic Tac Toe",
      link: "https://tic-tac-toe-theta-nine-49.vercel.app/",
      img: "https://ik.imagekit.io/nyeng5bmu/tic__O3seh7k7?updatedAt=1759406271941"
    },
    {
      title: "Simon Says",
      link: "https://simon-says-eight-tau.vercel.app/",
      img: "https://ik.imagekit.io/nyeng5bmu/simon-says.png?updatedAt=1759406038777"
    },
    {
      title: "Spin The Wheels",
      link: "https://spinthewheel-jade-three.vercel.app/",
      img: "https://ik.imagekit.io/nyeng5bmu/spin.jpg?updatedAt=1759405967429"
    }
  ];

  res.render("page/games", { games });
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
