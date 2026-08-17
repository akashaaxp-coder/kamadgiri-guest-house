// ======================================
// KAMADGIRI GUEST HOUSE - SCRIPT
// ======================================


// ---------- BOOKING FORM ----------

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    // Page reload रोकना
    event.preventDefault();


    // Form values लेना
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;
    const message = document.getElementById("message").value.trim();


    // Basic validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }


    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }


    if (date === "") {
        alert("Please select your booking date.");
        return;
    }


    if (guests === "") {
        alert("Please enter the number of guests.");
        return;
    }


    // WhatsApp number
    const whatsappNumber = "917800296082";


    // WhatsApp message
    const whatsappMessage =
        "Hello Kamadgiri Guest House,%0A%0A" +

        "I would like to make a booking.%0A%0A" +

        "Name: " + encodeURIComponent(name) + "%0A" +

        "Phone: " + encodeURIComponent(phone) + "%0A" +

        "Booking Date: " + encodeURIComponent(date) + "%0A" +

        "Number of Guests: " + encodeURIComponent(guests) + "%0A" +

        "Message: " +
        encodeURIComponent(message || "No additional message") +

        "%0A%0AThank you.";


    // WhatsApp URL
    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage;


    // WhatsApp खोलना
    window.open(whatsappURL, "_blank");


    // Success message
    alert(
        "Your booking request is ready. " +
        "WhatsApp will open to send the request."
    );


    // Form साफ करना
    bookingForm.reset();

});


// ======================================
// CURRENT YEAR IN FOOTER
// ======================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.innerHTML =
        "© " +
        currentYear +
        " Kamadgiri Guest House. All Rights Reserved.";

}


// ======================================
// NAVBAR SCROLL EFFECT
// ======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0, 0, 0, 0.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});