function hotelRates (month, nights){
    let costForStudio = 0;
    let costForApartment = 0;

    switch(month){
        case 'May':
        case 'October':{
            costForStudio = nights * 50;
            costForApartment = nights * 65;
            if(nights > 7 && nights < 14)
                costForStudio *= 0.95;
            else if(nights > 14){
                costForStudio *= 0.70;
                costForApartment *= 0.9;
            }
        }
        break;

        case 'June':
        case 'September':{
            costForStudio = nights * 75.2;
            costForApartment = nights * 68.7;
            if(nights > 14){
                costForStudio *= 0.8;
                costForApartment *= 0.9;
            }
        }
        break;

        case 'July':
        case 'August':{
            costForStudio = nights * 76;
            costForApartment = nights * 77;
            if(nights > 14)
                costForApartment *= 0.9;
        }
        break;
    }
    console.log(`Apartment: ${costForApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${costForStudio.toFixed(2)} lv.`);
}

hotelRates('August', 20);