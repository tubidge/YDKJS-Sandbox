var username = prompt("What is your name?");

if (username == "Phil") {
    alert(`Welcome back Philly!`)
} else {
    alert(`Welcome back ${username}!`)
};


console.log("Welcome back!");

var nameLength = [...username];
console.log(`Your name is ${nameLength.length} letters long.`);