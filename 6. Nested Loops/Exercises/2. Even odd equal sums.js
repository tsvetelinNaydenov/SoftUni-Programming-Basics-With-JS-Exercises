function evenOddEqualSums(startNum, endNum){
    let printLine='';

    for(let index1=startNum; index1<=endNum; index1++){
        let currentNum = '' + index1;
        let evenSum=0, oddSum=0;
        for(let index2=0; index2<currentNum.length; index2++){
            let currentNumPosition = Number(currentNum.charAt(index2));
            if(index2 % 2 === 0)
                evenSum += currentNumPosition;
            else
                oddSum += currentNumPosition;
        }
        if(evenSum === oddSum)
            printLine += `${index1} `;
    }
    console.log(printLine);
}

evenOddEqualSums(100000, 100050);