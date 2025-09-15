function numberRangeChecker(numberTobeChecked){
    if (numberTobeChecked >= -100 && numberTobeChecked <= 100 && numberTobeChecked !== 0)
        console.log('Yes');
    else
        console.log('No');
}

numberRangeChecker(0);