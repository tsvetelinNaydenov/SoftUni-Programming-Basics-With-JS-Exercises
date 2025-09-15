function minNumFinder(numsData){
    let minNum=Number(numsData[0]);
    let index=1;

    while(numsData[index] !== 'Stop'){
        let currentNum = Number(numsData[index]);
        if (currentNum < minNum) minNum=currentNum;
        index++;
    }
    console.log(minNum);
}

minNumFinder(["-10",
"20",
"-30",
"Stop"]);