// Set the date we're counting down to
var countDownDate = new Date("Sep 23, 2019 23:59:59").getTime();

function getTimeRemaining(endtime) {
 var now = new Date().getTime();
 var distance = countDownDate - now;
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 return {
  'total': distance,
  'days': days,
  'hours': hours,
  'minutes': minutes,
  'seconds': seconds
};
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var distance = getTimeRemaining(endtime);

    daysSpan.innerHTML = distance.days;
    hoursSpan.innerHTML = ('0' + distance.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + distance.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + distance.seconds).slice(-2);

    if (distance.total < 0) {
      clearInterval(timeinterval);
      document.getElementById("clockdiv").innerHTML = "EXPIRED";
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date;
initializeClock('clockdiv');

///////////////

// var x = setInterval(function() {
//   var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("clockdiv").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("clockdiv").innerHTML = "EXPIRED";
//   }
// }, 1000);