function accountMoneyAdder(accountPayments){
    let totalAccountBalance = 0;
    let index = 0;

    while(accountPayments[index] !== 'NoMoreMoney'){
        let currentPayment = Number(accountPayments[index]);
        if(currentPayment < 0){
            console.log('Invalid operation!');
            break;
        }
        else{
            totalAccountBalance += currentPayment;
            console.log(`Increase: ${currentPayment.toFixed(2)}`);
        }
        index++;
    }
    console.log(`Total: ${totalAccountBalance.toFixed(2)}`);
}

accountMoneyAdder(["120",
"45.55",
"-150"]);