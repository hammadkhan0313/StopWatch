// var count = 0;
// var Interval;
// function timer() {
//     count++
//     console.log(count)
// }

// Interval = setInterval(timer, 1000)

// setTimeout(function () {
//     clearInterval(Interval)
// }, 5000);


var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var Interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec 
if(msec >= 100){
    sec++
    secHeading.innerHTML = sec;
    msec = 0;
}else if(sec >= 60){
    min++
    minHeading.innerHTML = min;
    sec = 0;
}
}

function start(){
    Interval = setInterval(timer,10);
    var btn = document.getElementById("disable")
    btn.disabled = true;
};

function pause(){
    clearInterval(Interval)

};

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML= msec;
};

