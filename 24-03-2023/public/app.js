var h = window.innerHeight;
h = (h - ((h / 100) * 20));
document.getElementById('display').style.height = h.toString() + "px";

let displayWidget = document.getElementById('display');

let page = 1;

var dataLength = 0;



async function display(page, h) {
    const dataArray = await getData(page, h);
    dataArray.forEach(element => {
        dataLength++;
        const card = document.createElement("div");
        card.setAttribute("class","card");
        const img = document.createElement("img");
        img.setAttribute("src",(element.image).toString());
        const name = document.createElement("h2");
        name.innerHTML = element.name.toString();
        const price = document.createElement("h3");
        price.innerHTML = "Price : "+element.price.toString()
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        displayWidget.appendChild(card);
    });
}

document.getElementById('next').addEventListener("change",display(page++,h))

async function getData(page, size) {
    const data = await fetch(`http://localhost:3005/products?page=${page}&size=${size}`)
        .then(res => res.json()).then(data => { return data });
    return data;
}