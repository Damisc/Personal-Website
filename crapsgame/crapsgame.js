const registrationPane = "craps-registration-pane"
const mainSection = "craps-main-section"
const usernameInput = "craps-username-input"

function registerCrapsPlayer() {
    let crapsUsername = document.getElementById(usernameInput).value
    alert("Got: " + crapsUsername)
    removeRegistrationPane()
    showMainGameSection()
}

function removeRegistrationPane() {
    document.getElementById(registrationPane).style.display = "none"
}

function showMainGameSection() {
    document.getElementById(mainSection).style.display = "block";
}