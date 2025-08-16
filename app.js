const express = require("express");
const app = express();
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const path = require("path");
// const admin = require("firebase-admin");


const port = 8080;
// ----------------------------
// 4️⃣ Express App Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));


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
      tags: "FinTech, Campus",
      link: "https://yourdomain.com/campusp​ay",
      img: "https://i.pinimg.com/474x/59/f8/69/59f8694cb223061869e203bb38c059ed.jpg"
    },
    {
      title: "SmartPrint",
      description: "Smart printing solution for smart campuses",
      tech: "MERN Stack",
      tags: "Printing, IoT",
      link: "https://yourdomain.com/smartprint",
      img: "https://i.pinimg.com/474x/59/f8/69/59f8694cb223061869e203bb38c059ed.jpg"
    },
    {
      title: "DeeprajCreation",
      description: "A live e-commerce website in real use",
      tech: "MERN Stack",
      tags: "E-commerce",
      link: "https://yourdomain.com/deeprajcreation",
      img: "https://i.pinimg.com/474x/59/f8/69/59f8694cb223061869e203bb38c059ed.jpg"
    },
    {
      title: "DabbaTracker",
      description: "Track your tiffin easily and efficiently",
      tech: "MERN Stack",
      tags: "Food, Tracking",
      link: "https://yourdomain.com/dabbatracker",
      img: "https://i.pinimg.com/474x/59/f8/69/59f8694cb223061869e203bb38c059ed.jpg"
    }
  ];

  res.render("page/home", { mernProjects, mlProjects });
});



// ----------------------------
// 6️⃣ Start Server AFTER DB is connected
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
