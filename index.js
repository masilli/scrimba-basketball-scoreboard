let homeScore = document.getElementById("home-score");
let homeTitle = document.getElementById("home-title");
let guestScore = document.getElementById("guest-score");
let guestTitle = document.getElementById("guest-title");
let countHome = 0;
let countGuest = 0;

function addScore(el, value) {
    if (el === homeScore) {
        countHome += value;
        el.textContent = countHome;
    } else if (el === guestScore) {
        countGuest += value;
        el.textContent = countGuest;
    }
}

function add1(el) {
    addScore(el, 1);
}

function add2(el) {
    addScore(el, 2);
}

function add3(el) {
    addScore(el, 3);
}

function resetScore() {
    countHome = 0;
    countGuest = 0;
    homeScore.textContent = countHome
    guestScore.textContent = countGuest
}

function checkScores() {
    if (parseInt(homeScore.textContent) > parseInt(guestScore.textContent)) {
        homeTitle.style.color = "limegreen"
        homeTitle.style.textDecoration = "underline"
    } else {
        homeTitle.style.color = "#fff"
        homeTitle.style.textDecoration = "none"
    }
    if (parseInt(homeScore.textContent) < parseInt(guestScore.textContent)) {
        guestTitle.style.color = "limegreen"
        guestTitle.style.textDecoration = "underline"
    } else {
        guestTitle.style.color = "#fff"
        guestTitle.style.textDecoration = "none"
    }
}

checkScores()
setInterval(checkScores, 250)