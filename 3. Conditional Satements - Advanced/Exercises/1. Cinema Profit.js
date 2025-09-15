function cinemaProfitCalc(typeOfSeating, rows, colons){
    if (typeOfSeating === 'Premiere')
        console.log(`${(rows * colons * 12).toFixed(2)} leva`);
    else if(typeOfSeating === 'Normal')
        console.log(`${(rows * colons * 7.5).toFixed(2)} leva`);
    else if(typeOfSeating === 'Discount')
        console.log(`${(rows * colons * 5).toFixed(2)} leva`);
}

cinemaProfitCalc('Discount', 12, 30);