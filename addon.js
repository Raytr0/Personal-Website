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
    window.open("https://www.youtube.com/", "_blank", "width=200, height=200, scrollbar=no");
}

document.getElementById("date").onclick = function() {today()};
function today(){
    var d = new Date();
    document.write(d.getDay());
};

var p = Math.PI;
document.getElementById("pie").innerHTML = p;


$(document).ready(function() {
    $("button#Begone").click(function () {
        $("p#scare").slideToggle(1000);
        $(this).css("background-color","white");
    });
});