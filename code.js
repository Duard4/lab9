class flat {
    constructor(adress, rooms, price, overhaul) {
        this.adress = adress;
        if (!Number.isInteger(rooms)  || rooms<0){
            alert("Rooms are incorect")
        } 
        this.rooms = rooms;
        
        if (!Number.isInteger(price)  || price<0){
            alert("Price is incorect")
        } 
        this.price = price;
        this.overhaul = overhaul;
    }
    show() {
        let html = "";
        html += "<td>" + this.adress + "</td>";
        html += "<td>" + this.rooms + "</td>";
        html += "<td>" + this.price + "</td>";
        html += "<td>" + this.overhaul + "</td>";
        html += "</tr>";
        return html;
    }
}
function randomInt(min, max) {
    return Math.floor(Math.random()*(max-min))+min;
}
var adressL = []
adressL[0] = {
    adress : "Вулиця: Шевченка, Будинок: 15, Квартира: 43",
    rooms : randomInt(1, 5),
    price : randomInt(14000, 80000),
    overhaul : Math.random() < 0.5,
}
adressL[1] = {
    adress : "Вулиця: Горького, Будинок: 27, Квартира: 12",
    rooms : randomInt(1, 5),
    price : randomInt(14000, 80000),
    overhaul : Math.random() < 0.5,
}
adressL[2] = {
    adress : "Вулиця: Івана Франка, Будинок: 8, Квартира: 205",
    rooms : randomInt(1, 5),
    price : randomInt(14000, 80000),
    overhaul : Math.random() < 0.5,
}
adressL[3] = {
    adress : "Вулиця: Лісова, Будинок: 36А, Квартира: 7",
    rooms : randomInt(1, 5),
    price : randomInt(14000, 80000),
    overhaul : Math.random() < 0.5,
}
adressL[4] = {
    adress : "Вулиця: Велика Васильківська, Будинок: 101, Квартира: 18",
    rooms : randomInt(1, 5),
    price : randomInt(14000, 80000),
    overhaul : Math.random() < 0.5,
}
adressL[5] = {
    adress : "Вулиця: Хрещатик, Будинок: 77, Квартира: 22",
    rooms : randomInt(1, 5),
    price : randomInt(14000, 80000),
    overhaul :Math.random() < 0.5,
}
adressL[6] = {
    adress : "Вулиця: Липська, Будинок: 14, Квартира: 36",
    rooms : randomInt(1, 5),
    price : randomInt(14000, 80000),
    overhaul : Math.random() < 0.5,
}
adressL[7] = {
    adress : "Вулиця: Ярославів Вал, Будинок: 3, Квартира: 104",
    rooms : randomInt(1, 5),
    price : randomInt(14000, 80000),
    overhaul : Math.random() < 0.5,
}
adressL[8] = {
    adress : "Вулиця: Шота Руставелі, Будинок: 19, Квартира: 8",
    rooms : randomInt(1, 5),
    price : randomInt(14000, 80000),
    overhaul : Math.random() < 0.5,
}
adressL[9] = {
    adress : "Вулиця: Банкова, Будинок: 12А, Квартира: 17",
    rooms : randomInt(1, 5),
    price : randomInt(14000, 80000),
    overhaul : Math.random() < 0.5,
}

function print() {
    var n = document.getElementById("n").value;
    if (n<= 0) n = 5;
    else if (n>10) n = 10;
    var html = "<table class='b-table'>";
    html += "<tr class = 'b-table__th'><td>№</td><td>adress</td><td>rooms</td><td>price</td><td>overhaul</td></tr>";
    for (i = 0; i < n; i++) {
        let tr = new flat(adressL[i]['adress'], adressL[i]['rooms'], adressL[i]['price'], adressL[i]['overhaul']);
        html += "<tr>" + "<td>" + (parseInt(i)+1) + "</td>";
        html += tr.show();
    }
    html += "</table>";
    document.getElementById("print").innerHTML = html;
}

function clear_all() {
    var html = "<p> </p>"
    document.getElementById("print").innerHTML = html;
}
