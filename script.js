// Function to generate a random position for the "No" button
function generateRandomPosition() {
    var container = document.querySelector(".container");
    var button = document.getElementById("noButton");
    var randomX = Math.floor(Math.random() * (container.offsetWidth - button.offsetWidth));
    var randomY = Math.floor(Math.random() * (container.offsetHeight - button.offsetHeight));
    button.style.position = "absolute";
    button.style.top = randomY + "px";
    button.style.left = randomX + "px";
}

// Function to show the GIF or image in the middle of the website
function showGifOrImage(src) {
    var gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML = `<img src="${src}" alt="GIF or Image">`;
    gifContainer.classList.remove("hidden");
}

// Function to hide the GIF or image
function hideGifOrImage() {
    var gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML = "";
    gifContainer.classList.add("hidden");
}

// Function to handle click on "No" button
document.getElementById("noButton").addEventListener("click", function() {
    generateRandomPosition();
    showGifOrImage("angry.gif");
});

// Function to handle click on "Yes" button
document.getElementById("hangoutButton").addEventListener("click", function() {
    var container = document.querySelector(".container");
    var yesButton = document.getElementById("hangoutButton");
    var noButton = document.getElementById("noButton");
    var content = document.querySelector(".content");
    var gifContainer = document.getElementById("gifContainer");

    // Hide all other elements
    yesButton.style.display = "none";
    noButton.style.display = "none";
    content.style.display = "none";

    // Show the happy GIF
    showGifOrImage("happy.gif");

    // Show the alert message after a short delay
    setTimeout(function() {
        alert("Yay, I'm so happy");
    }, 500); // Show the alert message after 500 milliseconds
});

