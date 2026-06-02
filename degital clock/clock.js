





const displayTime1 = document.getElementById("displayTime");
const hourSpan1 = document.getElementById("hh");
const minSpan1 = document.getElementById("mm");
const secSpan1 = document.getElementById("ss");


function getTime1() {
    const dateNow = new Date();

    const hours1 = dateNow.getHours();
    const minutes1 = dateNow.getMinutes();
    const seconds1 = dateNow.getSeconds();


    const hh1 = String(hours1).padStart(2, "0");
    const mm1 = String(minutes1).padStart(2, "0");
    const ss1 = String(seconds1).padStart(2, "0");


    hourSpan1.textContent = hh1;
    minSpan1.textContent = mm1 ;
    secSpan1.textContent = ss1;

}

setInterval (getTime1, 1000)