function display() { /*JS function to get and display form data*/
    var firstname = document.getElementById("fname").value;
    var secondname = document.getElementById("lname").value;
    var _age = document.getElementById("age").value;

    // condition to get gender value from radio buttons//
    var gend = "Others";
    if(document.getElementById("male").checked){
        gend = "Male"
    }
    else if(document.getElementById("female").checked){
        gend = "Female"
    }
    document.getElementById('data').innerHTML = "<h3>Your Data:<h3><br>First Name: " + firstname + "<br>Second Name: " + secondname + "<br>Age:" + _age + "<br>Gender: " + gend;
}