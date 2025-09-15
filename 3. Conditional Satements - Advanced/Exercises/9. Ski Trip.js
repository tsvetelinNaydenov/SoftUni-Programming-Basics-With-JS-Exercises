function skiHotelRates (nights, typeOfRoom, review){
    let skiTripCost = 0;
    nights -= 1;

    switch(typeOfRoom){
        case 'room for one person':{
            skiTripCost = nights * 18;
            break;
        }
        case 'apartment':{
            skiTripCost = nights * 25;
            if(nights < 10)
                skiTripCost *= 0.7;
            else if(nights >= 10 && nights <= 15)
                skiTripCost *= 0.65;
            else
                skiTripCost *= 0.5;
            break;
        }
        case 'president apartment':{
            skiTripCost = nights * 35;
            if(nights < 10)
                skiTripCost *= 0.9;
            else if(nights >= 10 && nights <= 15)
                skiTripCost *= 0.85;
            else
                skiTripCost *= 0.8;
            break;
        }
    }

    switch(review){
        case 'positive':{
            skiTripCost *= 1.25;
            break;
        }
        case 'negative':{
            skiTripCost *= 0.9;
            break;
        }
    }

    console.log(skiTripCost.toFixed(2));
}

skiHotelRates(2, 'apartment', 'positive');