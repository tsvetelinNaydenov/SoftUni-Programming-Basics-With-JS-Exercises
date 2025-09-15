function flowerShopPricing (sumOfChrys, sumOfRose, sumOfTulip, season, holiday){
    let totalAmount = 0;

    switch(season){
        case 'Spring':
        case 'Summer':{
            totalAmount = sumOfChrys * 2 + sumOfRose * 4.1 + sumOfTulip * 2.5;
            if(holiday === 'Y')
                totalAmount *= 1.15;
            if(sumOfTulip > 7 && season === 'Spring')
                totalAmount *= 0.95;
            if ((sumOfChrys + sumOfRose + sumOfTulip) > 20)
                totalAmount *= 0.8;
            
        break;
        }
        case 'Autumn':
        case 'Winter':{
            totalAmount = sumOfChrys * 3.75 + sumOfRose * 4.5 + sumOfTulip * 4.15;
            if(holiday === 'Y')
                totalAmount *= 1.15;
            if(sumOfRose >= 10 && season === 'Winter')
                totalAmount *= 0.9;
            if ((sumOfChrys + sumOfRose + sumOfTulip) > 20)
                totalAmount *= 0.8;
            break;
        }
    }
    totalAmount += 2;
    console.log(totalAmount.toFixed(2));
}

flowerShopPricing(3, 10, 9, 'Winter', 'N');