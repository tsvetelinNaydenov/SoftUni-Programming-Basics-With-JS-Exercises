function travellingApp(travelerData){
    let index=0, destination = '', budget=0, savedMoney=0;

    while(travelerData[index]!=='End'){
        destination = travelerData[index];
        budget = Number(travelerData[index+1]);
        index += 2;
        while(savedMoney < budget){
            savedMoney += Number(travelerData[index]);
            index++;
        }
        console.log(`Going to ${destination}!`);
        savedMoney = 0;
    }
}

travellingApp(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);