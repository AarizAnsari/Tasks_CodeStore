
var source = "";
var destination = "";



//GLOBAL OBJECT TO STORE SELECTED ROUTES
const routes = {};


const cities = ['delhi','noida','lucknow','roorkee','mumbai','jaipur'];

//FUNCTION TO DISABLE DESTINATION CITY WHEN SELECTED IN SOURCE
function setSource() {
    let x = document.getElementById('source').value;

    index = cities.indexOf(x);
    
    let dests = [];
    if(routes.hasOwnProperty(x)){
        dests = routes[x];
    }
    for(let i=0;i<=5;i++){
        if(i==index || (dests.indexOf(i)>=0)){
            document.getElementById('destination').options[i+1].disabled = true;
        }
        else{
            document.getElementById('destination').options[i+1].disabled = false;
        }
    }
    document.getElementById('from').innerHTML = ("From :"+x).toUpperCase();
    source = x;
}

//FUNCTION TO DISABLE SOURCE CITY WHEN SELECTED IN DESTINATION
function setDestination() {
    let x = document.getElementById('destination').value;

    let index = cities.indexOf(x);

    for(let i=0;i<=5;i++){
        if(i==index){
            document.getElementById('source').options[i+1].disabled = true;
        }
        else{
            document.getElementById('source').options[i+1].disabled = false;
        }
    }
    document.getElementById('to').innerHTML = ("To :"+x).toUpperCase();
    destination = x;
}

//FUNTION TO SET SELCTED SOURCE AND DESTINATION TO A ROUTE
function setRoute(){
   routes[source.value].push(cities.indexOf(destination));
   console.log(typeof routes[source]);
   let data = "";
    for (const key in routes) {
        data += ("from :" + source + "&nbsp" + "to :" + destination + "<br>");
    }
}