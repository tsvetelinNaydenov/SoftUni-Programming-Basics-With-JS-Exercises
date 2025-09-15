function flowersForNewHouse (typeOfFlower, sumOfFlowers, budget){
    let totalCost = 0;

    switch(typeOfFlower){
        case 'Roses':{
            totalCost = sumOfFlowers * 5;
            if (sumOfFlowers > 80)
                totalCost *= 0.9
            break;
        }
        case 'Dahlias':{
            totalCost = sumOfFlowers * 3.8;
            if (sumOfFlowers > 90)
                totalCost *= 0.85;
            break;
        }
        case 'Tulips':{
            totalCost = sumOfFlowers * 2.8
            if (sumOfFlowers > 80)
                totalCost *= 0.85;
            break;
        }
        case 'Narcissus':{
            totalCost = sumOfFlowers * 3;
            if (sumOfFlowers < 120)
                totalCost *= 1.15;
            break;
        }
        case 'Gladiolus':{
            totalCost = sumOfFlowers * 2.5;
            if (sumOfFlowers < 80)
                totalCost *= 1.2;
            break;
        }
    }

    if (totalCost <= budget)
        console.log(`Hey, you have a great garden with ${sumOfFlowers} ${typeOfFlower} and ${(budget - totalCost).toFixed(2)} leva left.`);
    else
        console.log(`Not enough money, you need ${(totalCost - budget).toFixed(2)} leva more.`);
}

flowersForNewHouse('Tulips', 88, 260);