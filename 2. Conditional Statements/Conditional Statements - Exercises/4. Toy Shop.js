function petyasTripCalculation (costOfTrip, puzzels, dolls, teddyBears, minions, trucks){
    let totalToysAmount = puzzels * 2.6 + dolls * 3 + teddyBears * 4.1 + minions * 8.20 + trucks * 2;
    let totalSumOfToys = puzzels + dolls + teddyBears + minions + trucks;

    if (totalSumOfToys >= 50){
        totalToysAmount *= 0.75;
        totalToysAmount *= 0.9;
    }
    else
        totalToysAmount *= 0.9;

    if (totalToysAmount >= costOfTrip)
        console.log(`Yes! ${(totalToysAmount - costOfTrip).toFixed(2)} lv left.`);
    else
        console.log(`Not enough money! ${(costOfTrip - totalToysAmount).toFixed(2)} lv needed.`);
}

petyasTripCalculation(40.8, 20, 25, 30, 50, 10);
petyasTripCalculation(320, 8, 2, 5, 5, 1);
