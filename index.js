let countHome = 0
let countGuest = 0

let displayHome = document.getElementById("displayScoreHome")
let displayGuest = document.getElementById("displayScoreGuest")

function plusOneHome() {
    countHome += 1
    displayHome.textContent = countHome
}

function plusTwoHome() {
    countHome += 2
    displayHome.textContent = countHome
}

function plusThreeHome() {
    countHome += 3
    displayHome.textContent = countHome
}

function plusOneGuest() {
    countGuest += 1
    displayGuest.textContent = countGuest
}

function plusTwoGuest() {
    countGuest += 2
    displayGuest.textContent = countGuest
}

function plusThreeGuest() {
    countGuest += 3
    displayGuest.textContent = countGuest
}

function newGame() {
    countGuest = 0
    countHome = 0
    displayGuest.textContent = countGuest
    displayHome.textContent = countHome
    
}