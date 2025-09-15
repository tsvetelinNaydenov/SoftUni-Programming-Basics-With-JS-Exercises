function oscarsPointsCalc(candidateData){
    let candidateName = candidateData[0];
    let totalPoints = Number(candidateData[1]);
    let judgesCount = Number(candidateData[2]);

    for(let index=3; index<(judgesCount*2)+3; index+=2){
        totalPoints += (candidateData[index].length * Number(candidateData[index+1])) / 2;
        if(totalPoints > 1250.5){
            console.log(`Congratulations, ${candidateName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break;
        }
    }
    if(totalPoints <= 1250.5)
        console.log(`Sorry, ${candidateName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`)
}

oscarsPointsCalc(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
;