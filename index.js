let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function homeIncrementByOne() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function homeIncrementByTwo() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function homeIncrementByThree() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function guestIncrementByOne() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestIncrementByTwo() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function guestIncrementByThree() {
    guestCount += 3
    guestScore.textContent = guestCount
}

function reset() {
    homeCount = 0
    guestCount = 0

    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
}