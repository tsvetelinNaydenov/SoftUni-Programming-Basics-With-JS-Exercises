function tomsPlayTimeCalc (offDays){
    let workDays = 365 - offDays;
    let workDaysPlayTime = workDays * 63;
    let offDaysPlayTime = offDays * 127;
    let totalPlayTime = workDaysPlayTime + offDaysPlayTime;

    if (totalPlayTime > 30000){
        let overTime = totalPlayTime - 30000;

        console.log(`Tom will run away`);
        console.log(`${Math.floor(overTime / 60)} hours and ${(overTime % 60)} minutes more for play`)
    }
    else{
        let leftTime = 30000 - totalPlayTime;

        console.log(`Tom sleeps well`);
        console.log(`${Math.floor(leftTime / 60)} hours and ${(leftTime % 60)} minutes less for play`)
    }
}

tomsPlayTimeCalc(110);