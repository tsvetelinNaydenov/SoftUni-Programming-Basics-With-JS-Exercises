function euro2016GroupCalc (budget, typeOfTickets, sizeOfGroup){
    let costOfTransportation = 0;
    let costOfAllTickets = 0;
    let finalPriceOfTrip = 0;

    if(sizeOfGroup > 0 && sizeOfGroup <= 4)
        costOfTransportation = budget * 0.75;
    else if(sizeOfGroup >= 5 && sizeOfGroup <= 9)
        costOfTransportation = budget * 0.6;
    else if(sizeOfGroup >= 10 && sizeOfGroup <= 24)
        costOfTransportation = budget * 0.5;
    else if(sizeOfGroup >= 25 && sizeOfGroup <= 49)
        costOfTransportation = budget * 0.4;
    else
        costOfTransportation = budget * 0.25;

    switch(typeOfTickets){
        case 'VIP':{
            costOfAllTickets = sizeOfGroup * 499.99;
            if((budget - costOfTransportation) >= costOfAllTickets)
                console.log(`Yes! You have ${(budget - (costOfAllTickets + costOfTransportation)).toFixed(2)} leva left.`);
            else
                console.log(`Not enough money! You need ${((costOfAllTickets + costOfTransportation) - budget).toFixed(2)} leva.`);
            break;
        }
        case 'Normal':{
            costOfAllTickets = sizeOfGroup * 249.99;
            if((budget - costOfTransportation) >= costOfAllTickets)
                console.log(`Yes! You have ${(budget - (costOfAllTickets + costOfTransportation)).toFixed(2)} leva left.`);
            else
                console.log(`Not enough money! You need ${((costOfAllTickets + costOfTransportation) - budget).toFixed(2)} leva.`);
            break;
        }
    }
}

euro2016GroupCalc(30000, 'VIP', 49);