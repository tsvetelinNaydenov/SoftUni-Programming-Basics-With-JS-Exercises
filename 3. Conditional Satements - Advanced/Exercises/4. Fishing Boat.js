function fishingBoatPricing(budget, season, sumOfFishers){
    let totalCost = 0;

    switch (season){
        case 'Spring':{
            totalCost = 3000;
            if(sumOfFishers <= 6)
                totalCost *= 0.9;
            else if(sumOfFishers >= 7 && sumOfFishers <= 11)
                totalCost *= 0.85;
            else if(sumOfFishers > 12)
                totalCost *= 0.75;
            break;
        }
        case 'Summer':
        case 'Autumn':{
            totalCost = 4200;
            if(sumOfFishers <= 6)
                totalCost *= 0.9;
            else if(sumOfFishers >= 7 && sumOfFishers <= 11)
                totalCost *= 0.85;
            else if(sumOfFishers > 12)
                totalCost *= 0.75;
            break;
        }
        case 'Winter':{
            totalCost = 2600;
            if(sumOfFishers <= 6)
                totalCost *= 0.9;
            else if(sumOfFishers >= 7 && sumOfFishers <= 11)
                totalCost *= 0.85;
            else if(sumOfFishers > 12)
                totalCost *= 0.75;
        }
    }

    if((sumOfFishers % 2) === 0 && season !== 'Autumn')
        totalCost *= 0.95;

    if(totalCost <= budget)
        console.log(`Yes! You have ${(budget - totalCost).toFixed(2)} leva left.`);
    else
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva.`);
}

fishingBoatPricing(3600, 'Autumn', 6);