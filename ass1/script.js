
// Change Theme
function changeTheme() {
    document.body.classList.toggle("dark");
}

// Display Message
function showMessage() {
    document.getElementById("message").innerHTML =
    "Welcome to Computer Science Department!";
}

// Countdown Timer
let count = 10;

let timer = setInterval(function() {
    document.getElementById("timer").innerHTML = count;
    count--;

    if (count < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML =
        "Time's Up!";
    }
}, 1000);
