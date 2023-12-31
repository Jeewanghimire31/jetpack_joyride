let distanceTravelled = 0;
let coinsCollected = 0;
let gameStarted = false;

const createScorecardElement = () => {
  const scorecardElement = document.createElement("div");
  scorecardElement.id = "scorecard";
  scorecardElement.classList.add("scorecard");

  // elements for distance and coins
  distanceElement = document.createElement("div");
  coinsElement = document.createElement("div");

  highScoreElement = document.createElement("div");
  highScoreElement.classList.add("highScore");

  distanceElement.classList.add("distance"); // class for styling distance
  coinsElement.classList.add("coins"); // class for styling coins

  scorecardElement.appendChild(distanceElement);
  scorecardElement.appendChild(highScoreElement);
  scorecardElement.appendChild(coinsElement);

  document.body.appendChild(scorecardElement);
  updateScorecard(); // Call updateScorecard to initialize the content
};

const updateScorecard = () => {
  if (gameStarted) {
    const scorecardElement = document.getElementById("scorecard");
    if (!scorecardElement) {
      createScorecardElement();
    }

    // Update the content and styles
    distanceElement.textContent = `${distanceTravelled}m `;
    highScoreElement.textContent = `Best : ${new Score().getHighScore()}m`;
    coinsElement.textContent = `${coinsCollected} \u{1F4B0}`;
  }
};

// for background movement count
const increaseDistance = (distance) => {
  distanceTravelled += distance;
  updateScorecard();
};

const increaseCoins = () => {
  coinsCollected += 1;
  updateScorecard();
};

// Call createScorecardElement to ensure the element is created when the script is loaded
createScorecardElement();
