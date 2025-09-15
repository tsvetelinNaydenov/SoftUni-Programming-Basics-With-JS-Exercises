function farmersCalculator(vegiePrice, fruitPrice, vagieMass, fruitMass){
    let totalCost = (vegiePrice * vagieMass) + (fruitPrice * fruitMass);
    let totalCostEur = totalCost / 1.94;

    console.log(totalCostEur.toFixed(2));
}

farmersCalculator(1.5, 2.5, 10, 10);