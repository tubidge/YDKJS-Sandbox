var username = prompt("What is your name?");

if (username == "Phil") {
    alert(`Welcome back Philly!`)
} else {
    alert(`Welcome back ${username}!`)
};


console.log("Welcome back!");


var nameLength = [...username];
console.log(`Your name is ${nameLength.length} letters long.`);
console.log(`~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~`);

// YDKJS Chapter 2 Appendix A Practice
const dayStart = '07:30';
const dayEnd = '17:00';

function scheduleMeeting(startTime, durationMinutes) {
    // Convert dayStart, dayEnd, and startTime into comparable numbers
    var startNums = dayStart.split(':');
    var startHour = Number(startNums[0]);
    var startMin = Number(startNums[1]);
    console.log(startHour, startMin);

    var endNums = dayEnd.split(':');
    var endHour = Number(endNums[0]);
    var endMin = Number(endNums[1]);
    console.log(endHour, endMin);


    // let endTime = startTime + durationMinutes;
    // if (startTime >= dayStart && (endTime) <= dayEnd) {
    //     console.log('Hooray! Meeting can be scheduled.');
    // } else {
    //     console.log("Sorry, we aren't available then.");
    // }
    // console.log(`Meeting end time: ${endTime}`);

};

// Create functionality to coerce startTime and dayEnd to numbers, add meeting duration to startTime, and compare that to dayEnd value
scheduleMeeting('16:30', 60);