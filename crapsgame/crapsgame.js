// craps main data
let crapsUsername = ""

// craps game settings
const startingMoney = 1000
const startingRound = 0 
const bets = {
    even: "EVEN",
    odd: "ODD"
}

// HTML Element IDs
const registrationPane = "craps-registration-pane"
const mainSection = "craps-main-section"
const usernameInput = "craps-username-input"
const crapsStatUsername = "craps-stats-username"
const crapsStatMoney = "craps-stats-money"
const crapsStatRound = "craps-stats-rounds"

// in-game variables
let currentRounds = startingRound
let currentMoney = startingMoney
let currentBet = bets.even

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
    currentMoney = startingMoney
    currentRounds = startingRound
    setMoney(currentMoney)
    setRound(currentRounds)
    betEven()
}

function setMoney(money) {
    document.getElementById(crapsStatMoney).innerHTML = money 
}

function setRound(rounds) {
    document.getElementById(crapsStatRound).innerHTML = rounds
}

function betEven () {
    chooseBet(bets.even)
}

function betOdd () {
    chooseBet(bets.odd)
}
function chooseBet (bet) {
    currentBet = bet
    document.getElementById(bet).style.backgroundColor = "red";
    const deselectBet = bet == bets.even ? bets.odd : bets.even
    document.getElementById(deselectBet).style.backgroundColor = "transparent";
}