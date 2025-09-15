function livingInThePast (inheritence, endYear){
    let moneyLeft = inheritence, ivanchosAge = 18;

    for(index=1800; index<=endYear; index++){
        if((index % 2) === 0) moneyLeft -= 12000;
        else moneyLeft -= (12000 + 50 * ivanchosAge);
        ivanchosAge++;
    }
    if (moneyLeft>=0) console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    else console.log(`He will need ${(Math.abs(moneyLeft)).toFixed(2)} dollars to survive.`);
}

livingInThePast(100000.15, 1808);