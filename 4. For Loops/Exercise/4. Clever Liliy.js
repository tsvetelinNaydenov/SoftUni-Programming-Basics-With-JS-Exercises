function lilysSavedMoney (age, washerCost, singleToysPrice){
    let totalSavedMoney = 0;
    let totalMoneyFromToys = 0;
    let totalMoneyFromEvenBDS = 0;
    let brosMoney = 0;
    let evenBDSDecaCounter = 10;
    
    for(let i=1; i<=age; i++){ 
        if((i % 2) == 0){
            totalMoneyFromEvenBDS += evenBDSDecaCounter;
            brosMoney += 1;
            evenBDSDecaCounter += 10;
        }
        else
            totalMoneyFromToys += singleToysPrice;
    }
    totalSavedMoney = (totalMoneyFromEvenBDS + totalMoneyFromToys) - brosMoney;

    if(totalSavedMoney >= washerCost)
        console.log(`Yes! ${(totalSavedMoney - washerCost).toFixed(2)}`);
    else
        console.log(`No! ${(washerCost - totalSavedMoney).toFixed(2)}`);
}

lilysSavedMoney(21, 1570.98, 3);