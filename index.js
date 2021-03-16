var output;
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

    output = parseFloat(first) + parseFloat(second) + parseFloat(third) + parseFloat(fourth);
    

    if(!isNaN(output)){
        document.getElementById("displayFirst").innerHTML = "Shed A production is " + first + " litres per day" + "<br>";
        document.getElementById("displaySecond").innerHTML = "shed B production is " + second + " litres per day" + "<br>";
        document.getElementById("displayThird").innerHTML = "Shed C production is " + third + " litres per day" + "<br>";
        document.getElementById("displayFourth").innerHTML = "Shed D production is " + fourth + " litres per day" + "<br>";
        document.getElementById("displayOutput").innerHTML = "The total production is " + output + " litres per day" + "<br>";
        

    }
}

function incomeOverTime(price,period){
    var selling_price = 45;
//var income = 0;
//var income = period * selling_price * output;
var periodw = 7;
var periody = 365;
var periodm = 30;
var income = parseFloat(periodw) * parseFloat(selling_price) * parseFloat(output);
    //document.getElementById("display").innerHTML = ' ';
    var incomey = parseFloat(periody) * parseFloat(selling_price) * parseFloat(output);
    var periodm = parseFloat(periodm) *parseFloat(selling_price) * parseFloat(output); 
    
    document.getElementById("display").innerHTML= "The total weekly income is Ksh " + income;
    document.getElementById("displayY").innerHTML= "The total yearly income is Ksh " + incomey;
    document.getElementById("display").innerHTML= "The total monthly income is Ksh " + incomeOverTime;
}

