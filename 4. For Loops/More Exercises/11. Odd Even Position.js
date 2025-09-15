function oddEvenPoitionChecker(nums){
    let totalNums=Number(nums[0]);
    let evenSum=0, oddSum=0, minEven=10000000, maxEven=-10000000, minOdd=20000000, maxOdd=-2000000;

    for(index=1; index<=totalNums; index++){
        let currentNum=Number(nums[index]);
        if(index % 2 === 0){
            evenSum += currentNum;
            if(currentNum < minEven) minEven = currentNum;
            if(currentNum > maxEven) maxEven = currentNum;
        }
        else{
            oddSum += currentNum;
            if(currentNum < minOdd) minOdd = currentNum;
            if(currentNum > maxOdd) maxOdd = currentNum;
        }
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if(maxOdd !== -2000000 && minOdd !== 2000000){
        console.log(`OddMin=${minOdd.toFixed(2)},`);
        console.log(`OddMax=${maxOdd.toFixed(2)},`);
    }
    else{
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);  
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if(maxEven !== -10000000 && minEven !== 10000000){
        console.log(`EvenMin=${minEven.toFixed(2)},`);
        console.log(`EvenMax=${maxEven.toFixed(2)}`);
    }
    else{
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);  
    }
}

oddEvenPoitionChecker(["1",
"-5"]);