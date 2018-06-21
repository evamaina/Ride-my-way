function validateForm() {

    //Fname validation
    var fname = document.forms["signUp"]["Fname"].value;

    if (fname == "") {
        alert("First Name must be filled out");
        document.forms["signUp"]["Fname"].focus();
        return false;
    }

    //Lname validation
    var Lname = document.forms["signUp"]["Lname"].value;
    if (Lname == "") {
        alert("Last Name must be filled out");
        document.forms["signUp"]["Lname"].focus();
        return false;
    }

    //Username validation
    var Username = document.forms["signUp"]["Username"].value;
    if (Username == "") {
        alert("Username Name must be filled out");
        document.forms["signUp"]["Username"].focus();
        return false;
    }

    //Email validation
    var Email = document.forms["signUp"]["Email"].value;
    if (Email == "") {
        alert("Email must be filled out");
        document.forms["signUp"]["Email"].focus();
        return false;
    }

    //Phone number validation
    var Number = document.forms["signUp"]["Number"].value;
    if (Number == "") {
        alert("Number must be filled out");
        document.forms["signUp"]["Number"].focus();
        return false;
    }

    //Password validation
    var Password = document.forms["signUp"]["Password"].value;
    if (Lname == "") {
        alert("Password must be filled out");
        document.forms["signUp"]["Password"].focus();
        return false;
    }

    //confirm password validation
    var Cpassword = document.forms["signUp"]["Cpassword"].value;
    if (Cpassword == "") {
        alert("confirm password must be filled out");
        document.forms["signUp"]["Cpassword"].focus();
        return false;
    }
}

