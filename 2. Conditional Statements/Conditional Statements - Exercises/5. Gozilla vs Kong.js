function filmBudgetChecker (budget, sumOfExtras, costOfClothing){
    let dekor = budget * 0.1;
    let totalCostOfClothing = sumOfExtras * costOfClothing;

    if(sumOfExtras > 150){
        totalCostOfClothing *= 0.9;
    }
    
    let costOfFilming = totalCostOfClothing + dekor;

    if(costOfFilming > budget){
        console.log('Not enough money!');
        console.log(`Wingard needs ${(costOfFilming - budget).toFixed(2)} leva more.`);
    }
    else{
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - costOfFilming).toFixed(2)} leva left.`);
    }
}
filmBudgetChecker(9587.88, 222, 55.68);