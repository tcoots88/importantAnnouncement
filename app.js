'use strict'


var deadline = 'Feb 12 2020 00:00:01 GMT-0500';
function time_remaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
    var clock = document.getElementById(id);
    
    // get spans where our clock numbers are held
    var days_span = clock.querySelector('.days');
    var hours_span = clock.querySelector('.hours');
    var minutes_span = clock.querySelector('.minutes');
    var seconds_span = clock.querySelector('.seconds');

    function update_clock(){
        var t = time_remaining(endtime);
        
        // update the numbers in each part of the clock
        days_span.innerHTML = t.days;
        hours_span.innerHTML = ('0' + t.hours).slice(-2);
        minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
        seconds_span.innerHTML = ('0' + t.seconds).slice(-2);
        
        if(t.total<=0){ clearInterval(timeinterval); }
    }
    update_clock();
    var timeinterval = setInterval(update_clock,1000);
}
run_clock('clockdiv',deadline);

// // test
// let duration = 0.8;
// let delay = 0.3;
// let revealText = document.querySelector(".reveal");
// let letters = revealText.textContent.split("");
// revealText.textContent = "";
// let middle = letters.filter(e => e !== " ").length / 2;
// letters.forEach((letter, i) => {
//   let h1 = document.createElement("h1");
//   h1.textContent = letter;
//   h1.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
//   revealText.append(h1);
// });
