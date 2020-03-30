$("#send-message").on("click", function(e) {
    var form = document.getElementById("contact-form");
    var success = document.getElementById("success-message");
    form.display = "none";
    success.display = "inline";
    console.log('sent');
});