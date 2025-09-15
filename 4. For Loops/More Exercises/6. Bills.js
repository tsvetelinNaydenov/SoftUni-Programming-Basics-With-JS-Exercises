function billsMonthlyAverage (billsData){
    let totalMonths = Number(billsData[0]), totalAmount=0;
    let waterBills = totalMonths * 20, internetBills = totalMonths * 15, electricityBills=0, otherbills=0;

    for(let index=1; index<=totalMonths; index++){
        let currentElectricityBill = Number(billsData[index]);
        electricityBills += currentElectricityBill;
    }
    otherbills = (electricityBills + internetBills + waterBills) * 1.2;

    console.log(`Electricity: ${electricityBills.toFixed(2)} lv`);
    console.log(`Water: ${waterBills.toFixed(2)} lv`);
    console.log(`Internet: ${internetBills.toFixed(2)} lv`);
    console.log(`Other: ${otherbills.toFixed(2)} lv`);
    console.log(`Average: ${((electricityBills + waterBills + internetBills + otherbills) / totalMonths).toFixed(2)} lv`);
}

billsMonthlyAverage(["8",
"123.54",
"231.54",
"140.23",
"100",
"122.4",
"430",
"178.52",
"64.2"]);
