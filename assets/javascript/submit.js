
$("#submit").on("click", function(event) {
    event.preventDefault();

    var ssn = $("#ssn-input").val().trim();
    var dob = $("#dob-input").val().trim();

    if (ssn == "") {
        alert("Please enter a valid ssn");
    } else if (dob == "") {
        alert("Please enter a valid dob");
    } else {
        alert("Thank you for your submission");
    }

});
