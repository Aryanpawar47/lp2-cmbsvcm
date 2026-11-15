
let data = [];
let editId = -1;

// Admin Login
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user == "admin" && pass == "1234") {
        document.getElementById("login").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        show();
    } else {
        document.getElementById("error").innerText = "Invalid Credentials";
    }
}

// Create and Update Event
function saveEvent() {
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;

    if (!name || !category || !date) {
        alert("All fields must be filled");
        return;
    }

    let event = {name, category, date};

    if (editId == -1) {
        data.push(event);
    } else {
        data[editId] = event;
        editId = -1;
    }

    document.getElementById("name").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";

    show();
}

// Read Events
function show() {
    let output = "";

    for (let i = 0; i < data.length; i++) {
        output += `<div class="card">
            <h3>${data[i].name}</h3>
            <p>${data[i].category}</p>
            <p>${data[i].date}</p>
            <button onclick="editEvent(${i})">Edit</button>
            <button onclick="deleteEvent(${i})">Delete</button>
        </div>`;
    }

    document.getElementById("events").innerHTML =
        output || "<p>No Events Found</p>";
}

// Edit Event
function editEvent(i) {
    document.getElementById("name").value = data[i].name;
    document.getElementById("category").value = data[i].category;
    document.getElementById("date").value = data[i].date;

    editId = i;
}

// Delete Event
function deleteEvent(i) {
    if (confirm("Delete this event?")) {
        data.splice(i, 1);
        editId = -1;
        show();
    }
}

// Logout
function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("login").style.display = "block";
    editId = -1;
}
