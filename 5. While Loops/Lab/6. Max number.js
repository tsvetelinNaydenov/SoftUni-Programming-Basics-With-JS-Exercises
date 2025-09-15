function maxNumFinder(numsData){
    let maxNum=Number(numsData[0]);
    let index=1;

    while(numsData[index] !== 'Stop'){
        let currentNum = Number(numsData[index]);
        if (currentNum > maxNum) maxNum=currentNum;
        index++;
    }
    console.log(maxNum);
}

maxNumFinder(["45",
"-20",
"7",
"99",
"Stop"]);