function interestCalulator(deposit, period, yearlyInterest){
    let totalPeriodDue = deposit + period * ((deposit * (yearlyInterest / 100))/12);

    console.log(totalPeriodDue);
}

interestCalulator(2350, 6, 7);