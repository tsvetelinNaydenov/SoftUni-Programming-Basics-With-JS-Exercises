function moneyTracker (spendSaveData){
    let vacationCost = Number(spendSaveData[0]), savedMoney = Number(spendSaveData[1]);
    let spendCounter = 0, index = 2, daysCounter = 0;

    while(spendCounter !== 5){
        let currentMoney = Number(spendSaveData[index + 1]);
        daysCounter++;
            if (spendSaveData[index] === 'spend'){
                spendCounter++;
                savedMoney -= currentMoney;
                    if (savedMoney < 0) savedMoney = 0;
            }
            else {
                savedMoney += currentMoney;
                spendCounter = 0;
            }
            if (savedMoney >= vacationCost){
                console.log(`You saved the money for ${daysCounter} days.`);
                break;
            }
            index += 2;
        }
        if(spendCounter === 5){
            console.log(`You can't save the money.`);
            console.log(daysCounter);
        }  
}
moneyTracker(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);