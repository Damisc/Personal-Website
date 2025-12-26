
// craps main data
let crapsUsername = ""

// craps game settings
const startingMoney = 1000
const startingRound = 0 
const bets = {
    even: "EVEN",
    odd: "ODD"
}
const minimumBet = 100 

// HTML Element IDs
const registrationPane = "craps-registration-pane"
const mainSection = "craps-main-section"
const usernameInput = "craps-username-input"
const crapsStatUsername = "craps-stats-username"
const crapsStatMoney = "craps-stats-money"
const crapsStatRound = "craps-stats-rounds"
const crapsUserBetAmount = "craps-user-bet-amount"
const crapsRollDiceButton = "craps-roll-dice-button"
const crapsRolllDiceAnimationContainer = "craps-roll-dice-animation-container"

// in-game variables
let currentRounds = startingRound
let currentMoney = startingMoney
let currentBet = bets.even
let currentBetAmount = minimumBet
let canChangeBet = true

function registerCrapsPlayer() {
    crapsUsername = document.getElementById(usernameInput).value

    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g

    if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)) {
        alert("Username must be at least 5 characters long, alphanumeric and underscore only, no spaces and cannot start with a number")
    } else{
        removeRegistrationPane()
        showMainGameSection()
        setupFirstRound()
    }
}

function removeRegistrationPane() {
    document.getElementById(registrationPane).style.display = "none"
}

function showMainGameSection() {
    document.getElementById(mainSection).style.display = "block";
}

function setupFirstRound() {
    document.getElementById(crapsStatUsername).innerHTML = crapsUsername 
    setMoney(startingMoney)
    setRound(startingRound)
    betEven()
    setBetAmount(minimumBet)
}

function setMoney(money) {
    currentMoney = money 
    document.getElementById(crapsStatMoney).innerHTML = money 
}

function setRound(round) {
    currentRounds = round
    document.getElementById(crapsStatRound).innerHTML = round
}

function betEven () {
    chooseBet(bets.even)
}

function betOdd () {
    chooseBet(bets.odd)
}
function chooseBet (bet) {
    if (canChangeBet) { 
        currentBet = bet
        document.getElementById(bet).style.backgroundColor = "red";
        const deselectBet = bet == bets.even ? bets.odd : bets.even
        document.getElementById(deselectBet).style.backgroundColor = "transparent";  
    }
    
}

function increaseBet () {
    currentBetAmount = Math.min(currentBetAmount + minimumBet, currentMoney)
    setBetAmount(currentBetAmount)
}

function decreaseBet () {
    currentBetAmount = Math.max(currentBetAmount - minimumBet, minimumBet)
    setBetAmount(currentBetAmount)
}

function setBetAmount (betAmount) {
    if (canChangeBet) {
        currentBetAmount = betAmount
        document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount
    } 
}

function rollDice() {
    canChangeBet = false
    formatDiceScale()
    document.getElementById(crapsRollDiceButton).style.display = "none"
    const diceRollElement = document.getElementById(crapsRolllDiceAnimationContainer)
    rollADie({element: diceRollElement, numberOfDice: 2, callback: processDiceResult, delay: 1000000});
}

window.addEventListener("resize", formatDiceScale)
function formatDiceScale() {
    const vw = window.innerWidth * 0.7
    const vh = window.innerHeight * 0.8
    const widthScale = Math.min(600, vw, vh)
    const heightScale = widthScale * 0.71
    const scale = heightScale / 454.6457
    document.getElementById(crapsRolllDiceAnimationContainer).style.transform = "scale(" + scale + ")"
}

function processDiceResult(diceResult) {
    const sum = diceResult.reduce((partialSum, a) => partialSum + a, 0);
    let diceSumResult = bets.odd
    if (sum % 2 === 0) {
        diceSumResult = bets.even
    }


    setRound(currentRounds + 1)
    if (diceSumResult === currentBet) {
        alert("YOU WIN")
        setMoney(currentMoney + currentBetAmount)
    } else {
        alert("YOU LOSE")
        setMoney(currentMoney - currentBetAmount)
    }
}