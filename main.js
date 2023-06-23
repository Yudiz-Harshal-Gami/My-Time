let clockInterval = setInterval(runClock, 1000);

const hourhand = document.querySelector("#hour");
const minuteshand = document.querySelector("#minute");
const secondhand = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

function runClock() {

    hrPosition += (30 / 3600);
    minPosition += (6 / 60);
    secPosition += 6;
    hourhand.style.transform = "rotate(" + hrPosition + "deg)";
    minuteshand.style.transform = "rotate(" + minPosition + "deg)";
    secondhand.style.transform = "rotate(" + secPosition + "deg)";

}

const calc = () => {

    clearInterval(clockInterval);

    const effectiveHours = parseInt(
        document.getElementById("effectiveH").value
    );
    const effectiveMin = parseInt(
        document.getElementById("effectiveM").value
    );
    const lastHours = parseInt(document.getElementById("lastpunchH").value);
    const lastMin = parseInt(document.getElementById("lastpunchM").value);
    let remainingHours = 7 - effectiveHours + lastHours;
    let remainingMin = 60 - effectiveMin + lastMin;
    if (remainingMin >= 60) {
        remainingHours++;
        remainingMin = Math.abs(60 - remainingMin);
    }

    remainingHours = remainingHours > 12 ? remainingHours - 12 : remainingHours

    if (remainingMin <= 9) remainingMin = "0" + remainingMin

    document.getElementById("time").innerHTML = remainingHours + ":" + remainingMin;
    document.getElementById("time").style.color = "#9b9b9b";

    const hourhandNew = document.querySelector("#hour");
    const minuteshandNew = document.querySelector("#minute");
    const secondhandNew = document.querySelector("#second");

    var dateNew = new Date();
    let secNew = dateNew.getSeconds();

    let hrPositionNew = (remainingHours * 360) / 12 + (remainingMin * (360 / 60)) / 12;
    let minPositionNew = (remainingMin * 360) / 60;
    let secPositionNew = (secNew * 360) / 60;

    hrPositionNew += 30 / 3600;
    minPositionNew += 6 / 60;
    secPositionNew += 6;

    hourhandNew.style.transform = "rotate(" + hrPositionNew + "deg)";
    minuteshandNew.style.transform = "rotate(" + minPositionNew + "deg)";
    secondhandNew.style.transform = "rotate(" + secPositionNew + "deg)";

    return false;
};

