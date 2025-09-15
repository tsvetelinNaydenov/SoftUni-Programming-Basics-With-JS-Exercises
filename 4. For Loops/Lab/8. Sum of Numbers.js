function stringNumbersSumLoop (inString){
    let stringNumbersSum = 0;
    for(let i=0; i<inString.length; i++){
        stringNumbersSum += Number(inString[i]);
    }

    console.log(`The sum of the digits is:${stringNumbersSum}`);
}

stringNumbersSumLoop('1234');