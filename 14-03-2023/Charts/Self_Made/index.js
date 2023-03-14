//DATA IN FORM OF AN OBJECT
const data = {
    Physics: 70,
    Chemistry: 80,
    Maths: 50,
    English: 100,
};

//COLOR ARRAY TO GIVE DIFFERENT COLORS TO DIFFERENT BARS
const colors = ["red", "green", "blue", "burlywood"];

const quote = '"';
let chart = "";
let max = 0;
let i = 0;
for (const key in data) {
    if (data[key] > max) { max = data[key]; }

    //RESETTING THE VALUE OF i IF ENTRIES ARE GREATER THAN SIZE OF COLOR ARRAY
    if (i >= colors.length) { i = 0; }

    //INSERTING DIV AS STRING IN DOCUMENT 
    chart +=
        "<div style = " +
        quote +
        " height:20px;width:" +
        (data[key] * 2).toString() +
        "px;background-color:" +
        colors[i]
        + ";margin: 5px" +
        quote +
        ">" +
        key +
        "</div>";
    i++;
}

document.getElementById("chart").innerHTML = chart;

document.getElementById("chart").style.borderBottom = "1px dashed black";

document.getElementById("chart").style.borderLeft = "1px dashed black";

document.getElementById("chart").style.width = ((max * 2) + 5).toString() + "px";