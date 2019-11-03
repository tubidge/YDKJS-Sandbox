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

const dayStart = '07:30';
const dayEnd = '17:00';

function scheduleMeeting(startTime, durationMinutes) {

    let endTime = startTime + durationMinutes;
    if (startTime >= dayStart && (endTime) <= dayEnd) {
        console.log('Hooray! Meeting can be scheduled.');
    } else {
        console.log("Sorry, we aren't available then.");
    }
    console.log(`Meeting end time: ${endTime}`);

};

scheduleMeeting('16:30', 60);