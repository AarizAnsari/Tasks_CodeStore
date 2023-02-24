function display(){
    //Fetching data in variables
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var number = document.getElementById("num").value;
    var address = document.getElementById("address").value;
    var gender = document.getElementById("gend").value;
    var subjects = document.getElementById("subjects").value;

    //mapping variable data to id elements
    document.getElementById("sname").innerHTML = "Student Name: "+name;
    document.getElementById("sage").innerHTML = "Student Age: "+age;
    document.getElementById("snum").innerHTML = "Contact Number: "+number;
    document.getElementById("sadd").innerHTML = "Address: "+address;
    document.getElementById("sgender").innerHTML ="Gender: "+gender;
    var subj;
    //loop to break subject string to multiple subjects
    for(var i=0;i<subjects.length;i++){
        if(subjects[i]!=','){
        subj+=subjects[i];
        }
        else{
            subj+="<br>";
        }
    }
    document.getElementById("subs").innerHTML = "Subjects:<br>"+subj;
}

