function gameOfIntervals (gameData){
    let totalScore=0, totalRounds=Number(gameData[0]);
    let nums0To9=0, nums10To19=0, nums20To29=0, nums30To39=0, nums40To50=0, invalidNums=0;

    for(let index=1; index<=totalRounds; index++){
        let currentRound = Number(gameData[index]);

        if(currentRound < 0 || currentRound > 50){
            totalScore /= 2;
            invalidNums++;
        }
        else if(currentRound < 10){
            totalScore += currentRound * 0.2;
            nums0To9++;
        }
        else if(currentRound < 20){
            totalScore += currentRound * 0.3;
            nums10To19++;
        }
        else if(currentRound < 30){
            totalScore += currentRound * 0.4;
            nums20To29++;
        }
        else if(currentRound < 40){
            totalScore += 50;
            nums30To39++;
        }
        else if(currentRound < 51){
            totalScore += 100;
            nums40To50++;
        }
    }

    console.log(`${totalScore.toFixed(2)}`);
    console.log(`From 0 to 9: ${(nums0To9 / totalRounds * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(nums10To19 / totalRounds * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(nums20To29 / totalRounds * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(nums30To39 / totalRounds * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(nums40To50 / totalRounds * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalidNums / totalRounds * 100).toFixed(2)}%`);
}

gameOfIntervals(["10",
"43",
"57",
"-12",
"23",
"12",
"0",
"50",
"40",
"30",
"20"]);