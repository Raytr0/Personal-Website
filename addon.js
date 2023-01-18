document.getElementById("Button").onclick = function() {yesNo()};
function yesNo(){
    var c = confirm("Ok or Cancel?")
    if(c){
        alert("You pressed \"Ok\"");
    } else {
        alert('You pressed "Cancel"')
    }
};

document.getElementById("Google").onclick = function() {googlie()}
function googlie(){
    window.open("https://www.youtube.com/watch?v=NcLH6jAWG2E", "_blank", "width=200, height=200, scrollbar=no");
}

document.getElementById("date").onclick = function() {today()};
function today(){
    var d = new Date();
    let day;
    switch (d.getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    document.write(day);
    if (day = "Wednesday"){
        window.open("https://www.youtube.com/watch?v=du-TY1GUFGk", "_blank", "width=500, height=500, scrollbar=no");
    }
};

var p = Math.PI;
document.getElementById("pie").innerHTML = p;


$(document).ready(function() {
    $("button#Begone").click(function () {
        $("p#scare").slideToggle(1000);
        $(this).css("background-color","white");
    });
});