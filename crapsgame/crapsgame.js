// HTML Element IDs
const registrationPane = "craps-registration-pane"
const mainSection = "craps-main-section"
const usernameInput = "craps-username-input"

function registerCrapsPlayer() {
    let crapsUsername = document.getElementById(usernameInput).value

    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g

    if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)) {
        alert("Username must be at least 5 characters long, alphanumeric and underscore only, no spaces and cannot start with a number")
    } else{
        removeRegistrationPane()
        showMainGameSection()
    }
}

function removeRegistrationPane() {
    document.getElementById(registrationPane).style.display = "none"
}

function showMainGameSection() {
    document.getElementById(mainSection).style.display = "block";
}