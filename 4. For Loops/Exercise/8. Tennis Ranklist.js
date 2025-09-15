function tennisRanklistCalc (playerData){
    let totalTournamets=Number(playerData[0]), playerPoints=Number(playerData[1]); 
    let wonTournmnts=0;
     for(let index=2; index<totalTournamets+2; index++){
        if(playerData[index] === 'W'){
            playerPoints += 2000;
            wonTournmnts++;
        }
        else if(playerData[index] === 'F') playerPoints += 1200;
        else playerPoints += 720
     }
     console.log(`Final points: ${playerPoints}`);
     console.log(`Average points: ${Math.floor((playerPoints - playerData[1])/totalTournamets)}`);
     console.log(`${(wonTournmnts/totalTournamets*100).toFixed(2)}%`);
}

tennisRanklistCalc(["4",
"750",
"SF",
"W",
"SF",
"W"]);
