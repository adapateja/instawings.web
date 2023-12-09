// JavaScript to toggle the responsive menu
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
$(document).ready(function(){
// Enable carousel autoplay
$('#imageSlider').carousel({
    interval: 1000 
});

// Enable manual controls
$('.carousel-control-prev').click(function(){
    $('#imageSlider').carousel('prev');
});

$('.carousel-control-next').click(function(){
    $('#imageSlider').carousel('next');
});
});
const textToType = "We at instawings have a vision to offer value based approach to fulfill every needs of our patrons. We thereby offer them cost effective products by improving our manufacturing, process with a concern to environment, we use biodegradable raw materials in our manufacturing, to reduce carbon footprint., Team Instawings always strive to better ourselves with years, of experience down the line has made us possible to create, an innovative business model. We believe in recycling, hence, in our journey we want to deliver more and more eco friendly, recyclable products.";
let currentText = "";
let charIndex = 0;
const typingInterval = 30; // Adjust the typing speed (milliseconds)

function typeText() {
if (charIndex < textToType.length) {
    currentText += textToType.charAt(charIndex);
    document.getElementById("typingText").innerText = currentText;
    charIndex++;
    setTimeout(typeText, typingInterval);
}
}

// Start typing animation after a delay
setTimeout(typeText, 3000); // Delay of 3 seconds (adjust as needed)