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

function ProductionPerShade(){
    for (var i = 0; i < sheds.length; i++) {
        var perShed;
        perShed = sheds[i].cows * sheds[i].litrespercow;
        console.log("Production in " + sheds[i].name +" is " + perShed + " per day.");
        perShed = sheds[i].litres;
        
    }
}ProductionPerShade();