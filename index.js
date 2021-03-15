var sheds=[
    {
        name: "shed A",
        cows:3,
        litrespercow:40
    },
    {
        name: "shed B",
        cows:3,
        litrespercow:38
    },
    {
        name: "shed C",
        cows:3,
        litrespercow:42
    },
    {
        name: "shed D",
        cows:3,
        litrespercow:40
    }
];


var production =function (){
    for (var i = 0; i < sheds.length; i++) {
        var perShed;
        perShed = sheds[i].cows * sheds[i].litrespercow;
        console.log("Production in " + sheds[i].name +" is " + perShed + " per day.");
        perShed = sheds[i].litres;
        
    }
}
//production();//
var reset = function (){
    location.reload();
}

var total = function (){ 
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;
    var third = document.getElementById("third").value;
    var fourth = document.getElementById("fourth").value;

    var output = parseFloat(first) + parseFloat(second) + parseFloat(third) + parseFloat(fourth);
    

    if(!isNaN(output)){
        document.getElementById("displayFirst").innerHTML = "Shed A production is " + first + " litres per day" + "<br>";
        document.getElementById("displaySecond").innerHTML = "shed B production is " + second + " litres per day" + "<br>";
        document.getElementById("displayThird").innerHTML = "Shed C production is " + third + " litres per day" + "<br>";
        document.getElementById("displayFourth").innerHTML = "Shed D production is " + fourth + " litres per day" + "<br>";
        document.getElementById("displayOutput").innerHTML = "The total production is " + output + " litres per day" + "<br>";
        

    }
}

var selling_price = 45;
var income = 0;
var period = 7;
income = period * output * selling_price;
function incomeOverTime(price,period){
    document.getElementById("display").innerHTML = ' ';
    
    document.getElementById("display").innerHTML= "The total production is " + income + "litres per day";
}

