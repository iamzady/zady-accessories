// ================= MOBILE MENU =================

function toggleMenu() {
    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");
}


// ================= CLOSE MENU AFTER CLICK =================

document.querySelectorAll(".nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        const navMenu = document.getElementById("navMenu");

        navMenu.classList.remove("active");

    });

});


// ================= WHATSAPP ORDER =================

function orderProduct(productName, price) {

    const phoneNumber = "916385558452";

    const message =
        "Hello ZADY ACCESSORIES!%0A%0A" +
        "I want to order:%0A" +
        "Product: " + productName + "%0A" +
        "Price: ₹" + price + "%0A%0A" +
        "Please share the order details.";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;

    window.open(whatsappURL, "_blank");
}
