// Knocking off some rust
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

// Function to convert a time string "HH:MM" to a number of minutes
function convertTime(timeString) {
    let timeNums = timeString.split(':');
    for (var x = 0; x < 2; x++) {
        timeNums[x] = Number(timeNums[x]);
    };
    let timeValue = (timeNums[0] * 60) + timeNums[1];
    // console.log(`Converted time in minutes: ${timeValue}`)
    return timeValue;
};

function scheduleMeeting(meetStart, meetDuration) {
    // use converTime for dayStart, dayEnd, meetStart
    let meetStartMin = convertTime(meetStart);
    let dayStartMin = convertTime(dayStart);
    let dayEndMin = convertTime(dayEnd);
    // determine meeting end time
    let meetEndMin = meetStartMin + meetDuration;
    console.log(`Day Start: ${dayStartMin}, Day End: ${dayEndMin}`);
    console.log(`Meet Start: ${meetStartMin}, Meet End: ${meetEndMin}`);
    // if proposed meeting start AND end fit within schedule, success!
    if (meetStartMin >= dayStartMin && meetEndMin <= dayEndMin) {
        console.log('Your meeting has been booked!');
    } else {
        console.log(`Sorry, our hours are from ${dayStart} - ${dayEnd}`);
    };

};


scheduleMeeting('16:30', 60);