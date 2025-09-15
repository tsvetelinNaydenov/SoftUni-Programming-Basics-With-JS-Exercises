function twoNumsSumsFinder(startNum, endNum, magicNum){
    let combinationsCounter=0, flag=false, index1, index2;

    for(index1=startNum; index1<=endNum; index1++){
        for(index2=startNum; index2<=endNum; index2++){
            combinationsCounter++;
            if(index1 + index2 === magicNum){
                flag=true;
                break;
            }
        }
        if(flag)
            break;
    }
    if(flag)
        console.log(`Combination N:${combinationsCounter} (${index1} + ${index2} = ${magicNum})`);
    else
        console.log(`${combinationsCounter} combinations - neither equals ${magicNum}`);
}

twoNumsSumsFinder(88,
888,
1000);