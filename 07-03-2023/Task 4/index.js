
var source = "";
var destination = "";

//GLOBAL OBJECT TO STORE SELECTED ROUTES
const routes = {};

//FUNCTION TO DISABLE DESTINATION CITY WHEN SELECTED IN SOURCE
function setSource(dest) {

    //SOURCE CITY OBJECT
    //VALUE DEFINES A BOOLEAN TO IDENTIFY THE CITY IS  DISABLED OR ENABLED
    const source_cities = {
        delhi: false,
        noida: false,
        lucknow: false,
        roorkee: false,
        mumbai: false,
        jaipur: false
    }

    let keys = Object.keys(source_cities);
    let x = document.getElementById('source').value;
    source_cities[x] = true;

    if (dest != 'none') {
        source_cities[dest] = true;
    }
    for (let i = 0; i <= 5; i++) {
        document.getElementById('destination').options[i + 1].disabled = source_cities[keys[i]];
    }
    document.getElementById('from').innerHTML = ("From :" + x).toUpperCase();
    source = x;
}

//FUNCTION TO DISABLE SOURCE CITY WHEN SELECTED IN DESTINATION
function setDestination(src) {

    const dest_cities = {
        delhi: false,
        noida: false,
        lucknow: false,
        roorkee: false,
        mumbai: false,
        jaipur: false
    }

    let keys = Object.keys(dest_cities);
    let x = document.getElementById('destination').value;
    dest_cities[x] = true;

    if (src != 'none') {
        dest_cities[src] = true;
    }

    for (let i = 0; i <= 5; i++) {
        document.getElementById('source').options[i + 1].disabled = dest_cities[keys[i]];
    }
    document.getElementById('to').innerHTML = ("To :" + x).toUpperCase();
    destination = x;
}

//FUNTION TO SET SELCTED SOURCE AND DESTINATION TO A ROUTE
function setRoute() {

    //ERROR HANDLING IN CASE CITY OR DESTINATION IS NOT SELECTED
    try {
        if (destination == '' || source == '') {
            throw "Please select destination and source"
        }
        routes[source] = destination;
        destination = "";
        source = "";
        let data = "Created Routes <br>";
        for (const key in routes) {
            data += ("from :" + key + "&nbsp" + "to :" + routes[key] + "<br>");
            setDestination(routes[key]);
            setSource(key);
        }
        document.getElementById('routes_list').innerHTML = data;
        document.getElementById('to').innerHTML = null;
        document.getElementById('from').innerHTML = null;
    }
    catch (err) {
        window.alert(err);
    }
}