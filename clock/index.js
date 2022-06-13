let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let hoursText = hours.firstElementChild;
let minutesText = minutes.firstElementChild;
let secondsText = seconds.firstElementChild;


let width = hours.clientWidth + "px";

hours.style.setProperty('--ring-width', width)
minutes.style.setProperty('--ring-width', width)
seconds.style.setProperty('--ring-width', width)

setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hoursPercentage = h/24 * 100
    minutesPercentage = m/60 * 100
    secondsPercentage = s/60 * 100
    
    hours.style.setProperty('--percentage', hoursPercentage)
    minutes.style.setProperty('--percentage', minutesPercentage)
    seconds.style.setProperty('--percentage', secondsPercentage)

    hoursText.innerHTML = h;
    minutesText.innerHTML = m;
    secondsText.innerHTML = s;
},1000);


