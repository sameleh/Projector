"use strict";


const body = document.body;
const button = document.querySelector("button");
const statistics = document.querySelector(".statistics");




function setThemeState(currentState, previousState) {
    const currentDate = new Date();
    const options = {day: "numeric", month: "short", year: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"};
    const formattedDate =  new Intl.DateTimeFormat("en-GB", options).format(currentDate);
    const status = {currentState: currentState, previousState: previousState, date: formattedDate};
    localStorage.setItem("status", JSON.stringify(status));
}




function switchTheme() {
    let previousState = body.className;

    if(!previousState) {
        previousState = "on";
    }

    if (body.classList.contains("off")) {
        body.classList.remove("off");
        body.classList.add("on");
    } else {
        body.classList.remove("on");
        body.classList.add("off");
    }
    
    const currentState = body.className;

    setThemeState(currentState, previousState);
    getThemeState();
}

button.addEventListener("click", switchTheme);




function getThemeState(previousState) {
    const storageInfo = JSON.parse(localStorage.getItem("status"));

    if (storageInfo) {
        body.className = storageInfo.currentState;
        button.innerText = `Turn ${storageInfo.previousState}`;
        statistics.innerHTML = `<span>Last turn ${storageInfo.currentState}: </span>` + storageInfo.date;
    }
}

window.addEventListener("load", getThemeState);