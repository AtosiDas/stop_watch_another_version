const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const secButton = document.getElementsByClassName("sec")[0];
const centiSecButton = document.getElementsByClassName("msec")[0];
const minButton = document.getElementsByClassName("minute")[0];
const hourButton = document.getElementsByClassName("hours")[0];
const laps = document.getElementsByClassName("laps")[0];
const clear = document.getElementsByClassName("clear")[0];
//const icon = document.getElementsByClassName("fa-solid")[0];

let isPlay = false;
let min;
let minCounter = 0;
let secCounter = 0;
let sec;
let centiSec;
let centiSecCounter = 0;
let hour;
let hourCounter = 0;
let isReset = false;
let lapItem = 0;

const toogleButton = () => {
    lapButton.classList.remove("dis");
    resetButton.classList.remove("dis");
}
const play = () => {
    if(!isPlay && !isReset) {
        playButton.innerHTML = "Pause";
        hour = setInterval(() =>{
            hourButton.innerHTML = `${++hourCounter} : &nbsp;`;
        }, 60*60*1000);
        min = setInterval(() =>{
            if(minCounter === 59) {
                minCounter = -1;
            }
            minButton.innerHTML = ` ${++minCounter} : &nbsp;`;
        }, 60*1000);
        sec = setInterval(() =>{
            if(secCounter === 59) {
                secCounter = -1;
            }
            secButton.innerHTML = `${++secCounter} :&nbsp;`;
        }, 1000);
        centiSec = setInterval(() =>{
            if(centiSecCounter === 99) {
                centiSecCounter = -1;
            }
            centiSecButton.innerHTML = `${++centiSecCounter}`;
        }, 10);
        isPlay = true;
        isReset = true;
    }else {
        playButton.innerHTML = "Play";
        clearInterval(hour);
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay = false;
        isReset = false;
        
    }
    toogleButton();
}

const reset = () => {
    isReset = true;
    minCounter = 0;
    secCounter = 0;
    centiSecCounter = 0;
    hourCounter = 0;
    play();
    lapButton.classList.add("dis");
    resetButton.classList.add("dis");
    playButton.innerHTML = "Play";
    hourButton.innerText = "00 : ";
    minButton.innerText = "00 :";
    secButton.innerHTML = "00 :";
    centiSecButton.innerHTML = "00";
    clearAll();
    lapItem = 0;
}
const lap = () => {
    const li =  document.createElement("li");
    const number = document.createElement("span");
    const timeStamp =  document.createElement("span");
    //const icons = document.createElement("button");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class","number");
    timeStamp.setAttribute("class","timestamp");
    // icons.setAttribute("class", "fa-matrix");
    //icons.setAttribute("class","fa-solid");
    number.innerText = `${++lapItem})`;
    timeStamp.innerHTML = `${hourCounter} : ${minCounter} : ${secCounter} : ${centiSecCounter}`;
    li.append(number, timeStamp);
    laps.append(li);
    clear.classList.remove("dis");
    play();
    minCounter = 0;
    secCounter = 0;
    centiSecCounter = 0;
    hourCounter = 0;
    clearInterval(hour);
    clearInterval(min);
    clearInterval(sec);
    clearInterval(centiSec);
    // isPlay = true;

    playButton.innerHTML = "Play";
    hourButton.innerText = "00 : ";
    minButton.innerText = "00 :";
    secButton.innerHTML = "00 :";
    centiSecButton.innerHTML = "00";
    lapButton.classList.add("dis");
}

const clearAll = () => {
    laps.innerHTML = "";
    laps.append(clear);
    lapItem = 0;
    clear.classList.add("dis");
}
// const icons = () => {

// }
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clear.addEventListener("click", clearAll);
//icon.addEventListener("click",icons);