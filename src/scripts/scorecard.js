// scorecard.js

let distanceTravelled = 0;
let coinsCollected = 0;

const createScorecardElement = (()=> {
    const scorecardElement = document.createElement('div');
    scorecardElement.id = 'scorecard';
    scorecardElement.classList.add('scorecard');
    document.body.appendChild(scorecardElement);
    updateScorecard(); // Call updateScorecard to initialize the content
});


const updateScorecard = (() =>{
    const scorecardElement = document.getElementById('scorecard');
    if (!scorecardElement) {
        createScorecardElement();
    }

    scorecardElement.textContent = `Distance: ${distanceTravelled}m | Coins: ${coinsCollected}`;
});

const increaseDistance = ((distance) =>{
    distanceTravelled += distance;
    updateScorecard();
});

const increaseCoins = (() => {
    coinsCollected += 1;
    updateScorecard();
});

// Call createScorecardElement to ensure the element is created when the script is loaded
createScorecardElement();
