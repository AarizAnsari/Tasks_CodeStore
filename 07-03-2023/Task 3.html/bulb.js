function toggle(){
    let state = document.getElementById('toggle_button').innerHTML;
    if(state == 'OFF'){
        document.getElementById('bulb').src = "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg";
        document.getElementById('toggle_button').innerHTML = "ON";
    }
    else if(state == 'ON'){
        document.getElementById('bulb').src = "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg";
        document.getElementById('toggle_button').innerHTML = "OFF";
    }
}