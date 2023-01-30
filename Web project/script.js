"use strict";
// UPDATE FOOTER
var LastUpdated = document.lastModified;
document.getElementById('last-update').innerHTML = "This page was last updated " + LastUpdated;

// COUNTDOWN TIMER

// This fulfills requirement 3.2.6 A)

// the date we are counting down to
var countDownDate = new Date("Dec 25, 2022 15:37:25");

// update the countdown every 1 second
var x = setInterval(function () {
    // get today's date and time
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById('countdown').innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = "EXPIRED";
    }
}, 1000);