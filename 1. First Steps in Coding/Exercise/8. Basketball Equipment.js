function basketballEquipmentFeeCalculator (yearlyFee){
    let shoes = yearlyFee * 0.6;
    let jersey = shoes * 0.8;
    let ball = jersey * 0.25;
    let accessories = ball * 0.20;
    let totalYearlyPrice = yearlyFee + shoes + jersey + ball + accessories;

    console.log(totalYearlyPrice);
}

basketballEquipmentFeeCalculator(550
    
);