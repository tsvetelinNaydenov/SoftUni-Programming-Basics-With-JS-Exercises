function sumOfPrimeNonPrime (numsArr){
    let primeSum=0, nonPrimeSum=0, index=0;

    while(numsArr[index] !== 'stop'){
        let currentNum = Number(numsArr[index]), dividers=0;
            if(currentNum < 0){
                console.log('Number is negative.');
                index++;
                continue;
            }
        for(let checkNum=1; checkNum<=currentNum; checkNum++){
            if(currentNum % checkNum === 0)
                dividers++;
            if (dividers > 2){
                nonPrimeSum += currentNum;
                break;
            }              
        }
        if(dividers === 2)
            primeSum += currentNum;
        index++;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumOfPrimeNonPrime(["0",
"-9",
"0",
"stop"]);