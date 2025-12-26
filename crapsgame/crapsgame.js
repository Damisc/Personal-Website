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

// create Dice Roll Settings
const numOfDiceToRoll = 2
const hideDiceDelay = 1000000
const processDiceResultDelay = 180

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
const crapsBettingGridContainer = "craps-betting-grid-container"
const crapsRoundFinishGridContainer = "craps-round-finish-grid-container"
const crapsRoundFinishMessage = "craps-round-finish-message"
const crapsNextRoundButtonDisabled = "craps-next-round-button-disabled"
const crapsNextRoundButton = "craps-next-round-button"

// in-game variables
let currentRounds = startingRound
let currentMoney = startingMoney
let currentBet = bets.even
let currentBetAmount = minimumBet
let canChangeBet = true

// Game starting point
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


// HTML element manipulation functions
function showElement (elementId) {
    document.getElementById(elementId).style.display = "block"
}

function hideElement (elementId) {
    document.getElementById(elementId).style.display = "none"
}

function removeRegistrationPane() {
    hideElement(registrationPane)
}

function showRegistrationPane() {
    showElement(registrationPane)
}

function showMainGameSection() {
    showElement(mainSection)
}

function hideMainGameSection() {
    hideElement(mainSection)
}

// Round management functions
function setupFirstRound() {
    document.getElementById(crapsStatUsername).innerHTML = crapsUsername 
    hideElement(crapsNextRoundButtonDisabled)
    showElement(crapsNextRoundButton)
    setMoney(startingMoney)
    setRound(startingRound)
    betEven()
    setBetAmount(minimumBet)
    setupNextRound()
}

function setupNextRound() {
    hideElement(crapsRolllDiceAnimationContainer)
    hideElement(crapsRoundFinishGridContainer)
    showElement(crapsRollDiceButton)
    showElement(crapsBettingGridContainer)
    canChangeBet = true
    setBetAmount(minimumBet)
}

// User Bet settings
function setMoney(money) {
    currentMoney = money 
    document.getElementById(crapsStatMoney).innerHTML = money 
}

function setRound(round) {
    currentRounds = round
    document.getElementById(crapsStatRound).innerHTML = round
}

// Manage user Bet selection
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

// Roll dice and process result
function rollDice() {
    canChangeBet = false
    formatDiceScale()
    showElement(crapsRolllDiceAnimationContainer)
    hideElement(crapsRollDiceButton)
    const diceRollElement = document.getElementById(crapsRolllDiceAnimationContainer)
    rollADie({element: diceRollElement, numberOfDice: numOfDiceToRoll, callback: delayedProcessDiceResult, delay: hideDiceDelay});
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

function delayedProcessDiceResult(diceResult) {
    setTimeout(function() {processDiceResult(diceResult)}, processDiceResultDelay)
     
}

function processDiceResult(diceResult) {
    const sum = diceResult.reduce((partialSum, a) => partialSum + a, 0);
    let diceSumResult = bets.odd
    if (sum % 2 === 0) {
        diceSumResult = bets.even
    }

    setRound(currentRounds + 1)
    let roundFinishMessage = ""
    if (diceSumResult === currentBet) {
        roundFinishMessage = "YOU WIN"
        setMoney(currentMoney + currentBetAmount)
    } else {
        roundFinishMessage = "YOU LOSE"
        setMoney(currentMoney - currentBetAmount)
    }

    if (currentMoney === 0) {
        roundFinishMessage = "YOU'RE OUT!"
        showElement(crapsNextRoundButtonDisabled)
        hideElement(crapsNextRoundButton)
    }
    hideElement(crapsBettingGridContainer)
    showElement(crapsRoundFinishGridContainer)
    document.getElementById(crapsRoundFinishMessage).innerHTML = roundFinishMessage
}

// Exit Game
function exitGame() {
    hideMainGameSection()
    showRegistrationPane()
    document.getElementById(usernameInput).value = ""
}
