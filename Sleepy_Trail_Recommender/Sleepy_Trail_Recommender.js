/*
    Author:Amarren Hopkins
    Date:10/1/26
    Purpose: To create the list of trails and the details involved with them.
*/

/* =========================================
   SLEEPY PARK TRAIL DATA
========================================= */

const trails = [
    { name: "River Walk", difficulty: "low", time: 20 },
    { name: "Forest Loop", difficulty: "medium", time: 45 },
    { name: "Hill Summit Trail", difficulty: "high", time: 90 },
    { name: "Lake Side Path", difficulty: "low", time: 30 },
    { name: "Rock Ridge Trail", difficulty: "high", time: 75 },
    { name: "Pine Meadow Trail", difficulty: "low", time: 35 },
    { name: "Cedar Creek Trail", difficulty: "medium", time: 60 },
    { name: "AMAHOP2918 Summit Trail", difficulty: "high", time: 105 }
];

/* =========================================
   DISPLAY TRAILS VIA LOOP
========================================= */

const trailContainer = document.getElementById("trailContainer");

if (trailContainer) {
    trails.forEach(function (trail) {
        const article = document.createElement("article");
        article.className = "card";

        article.innerHTML = `
            <h3>${trail.name}</h3>
            <p>Difficulty: ${trail.difficulty}</p>
            <p>Average Time: ${trail.time} minutes</p>
        `;

        trailContainer.appendChild(article);
    });
}


/* =========================================
   FORM LOGIC
========================================= */

const trailForm = document.getElementById("trailForm");
const result = document.getElementById("result");

if (trailForm && result) {
    trailForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const pets = document.querySelector('input[name="pets"]:checked').value;
        const experience = document.getElementById("experience").value;

        let recommendedTrail;

        if (pets === "yes" && experience === "low") {
            recommendedTrail = "River Walk";
        } else if (pets === "yes" && (experience === "medium" || experience === "high")) {
            recommendedTrail = "Forest Loop";
        } else if (pets === "no" && experience === "low") {
            recommendedTrail = "Lake Side Path";
        } else if (pets === "no" && experience === "medium") {
            recommendedTrail = "Forest Loop";
        } else if (pets === "no" && experience === "high") {
            recommendedTrail = "Rock Ridge Trail";
        } else {
            recommendedTrail = "River Walk";
        }

        const trail = trails.find(function (item) {
            return item.name === recommendedTrail;
        });

        if (trail) {
            result.innerHTML = `
                <h3>Recommended Trail: ${trail.name}</h3>
                <p>Difficulty: ${trail.difficulty}</p>
                <p>Average Time: ${trail.time} minutes</p>
            `;
        } else {
            result.textContent = "Recommended Trail: River Walk";
        }
    });
}
