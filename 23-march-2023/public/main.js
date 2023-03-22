import { setDefault } from "../controller/defaultController.js";
import {reserveTable,findReservations,deleteTable,getAll} from "../controller/crudController.js";

setDefault();

document.getElementById('reservationbutton').addEventListener('click',getReservation);

function saveReservation(date, table, from, to) {

    from = getMinutes(from);
    to = getMinutes(to);
    let bool = false;

    if (table == '0') {
        alert('Please Select a Table😊');
        bool = true; return;
    }

    if (date == currDate && from < currTime) {
        alert('Please Select a Valid Slot😊');
        bool = true; return;
    }

    if (to <= from || (to - from) < 30) {
        alert('Please Choose Atleast 30 minutes slot');
        bool = true; return;
    };

    if (from < 540 || to > 1320) {
        alert('Please slect a slot within open hours');
        bool = true; return;
    }

    
    if (arr != null && arr != '') {
        let slots = findReservations(table,date);
        slots.forEach(element => {
            setTo = element.to;
            setFrom = element.from;
            if ((from == setFrom || to == setTo) || (from <= setFrom && to >= setTo) || (to >= setTo && from <= setFrom)) {
                alert('This Table is not available for the selected time slot');
                bool = true; return;
            }
        });
        if (bool == false) {
            reserveTable(table,date,from,to);
        }
    }
    else {
        reserveTable(table,date,from,to);
    }
    if (bool == false) {
        const arr = getAll();
        arr.forEach(element => {
            display(element.date,element.table,element.from,element.to,element.id);
        })
    }
    return;
}

function getMinutes(time) {
    let minutes = Number(time.substring(0, 2)) * 60;
    minutes += Number(time.substring(3, 5));
    return minutes;
}

function getReservation() {
    const date = document.getElementById('date').value;
    const table = document.getElementById('Tables').value;
    const from = document.getElementById('appt').value;
    const to = document.getElementById('to').value;
    saveReservation(date, table, from, to);
}


function display(date1, i, From, To,id) {
    document.getElementById('res').style.visibility = 'visible';
    const node = document.createTextNode("On "+date1+" Table " + i + " is Booked from " + toHoursAndMinutes(From) + " to " + toHoursAndMinutes(To));
    const del = document.createElement("button");
    const ndel = document.createTextNode("🗑");
    del.appendChild(ndel);
    const cont = document.createElement("div");
    cont.setAttribute("id", (date1 + i + From + To));
    del.setAttribute("onclick",deleteTable(id) );
    const element = document.getElementById("div1");
    cont.appendChild(node);
    cont.appendChild(del);
    cont.style.padding = "10px";
    element.appendChild(cont);
}


function toHoursAndMinutes(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours <= 9) {
        hours = '0' + hours;
    }
    if (minutes <= 9) {
        minutes = '0' + minutes;
    }
    return hours.toString() + ':' + minutes.toString();
}
