
// date counter

const countDownDate = new Date("jul 9,2026 11:00:00").getTime();
const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days =Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance% (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance% (1000*60*60))/(1000*60));
    const seconds = Math.floor((distance% (1000*60))/(1000));

    document.getElementById("days").innerHTML =days;
    document.getElementById("hours").innerHTML =hours;
    document.getElementById("minutes").innerHTML =minutes;
    document.getElementById("seconds").innerHTML =seconds;

}, 1000);