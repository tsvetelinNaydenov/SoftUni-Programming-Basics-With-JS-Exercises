function swimmingWorldRecordCalculator(worldRecord, distance, timePerM){
    let waterDelaySec = Math.floor(distance / 15) * 12.5;
    let ivansRecord = (distance * timePerM) + waterDelaySec;

    if(ivansRecord < worldRecord)
        console.log(`Yes, he succeeded! The new world record is ${ivansRecord.toFixed(2)} seconds.`);
    else
        console.log(`No, he failed! He was ${(ivansRecord - worldRecord).toFixed(2)} seconds slower.`)
}

swimmingWorldRecordCalculator(55555.67, 3017, 5.03);