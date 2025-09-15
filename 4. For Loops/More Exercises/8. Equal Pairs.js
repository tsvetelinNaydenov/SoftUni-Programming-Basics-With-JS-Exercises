function equalPairLoopAndSort(pairsData){
    let totalPairs = Number(pairsData[0]);
    let pairsSums = [], equalityFlag = true, pairSumsIndex=0;
    
    //Storing all of the pairs' sums in an array
    for(let index=1; index<=totalPairs*2; index+=2){
        pairsSums[pairSumsIndex] = Number(pairsData[index]) + Number(pairsData[index+1]);
        pairSumsIndex++; 
    }
    //Going through all of the pair sums to check if they are all equal
    for(let index=0; index<totalPairs; index++){
        if(pairsSums[0] !== pairsSums[index]){
            equalityFlag = false;
            break;
        } 
    }
    //If equality was found, then find max number and min number
    if(equalityFlag) console.log(`Yes, value=${pairsSums[0]}`);
    else{
        let maxDiff = 0;
        for (let i = 1; i < totalPairs; i++) {
            let diff = Math.abs(pairsSums[i] - pairsSums[i - 1]);
        if (diff > maxDiff) maxDiff = diff;
        }
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

equalPairLoopAndSort(["2",
"1",
"2",
"2",
"2"]);