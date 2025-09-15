function histogramLooper (numsArray){
    let p1Count = 0, p2Count = 0, p3Count = 0, p4Count = 0, p5Count = 0;

    for(let index=1; index<=numsArray[0]; index++){
        if(numsArray[index] < 200) p1Count++;
        else if(numsArray[index] < 400) p2Count++;
        else if(numsArray[index] < 600) p3Count++;
        else if(numsArray[index] < 800) p4Count++;
        else p5Count++;
    }
    console.log(`${((p1Count/numsArray[0])*100).toFixed(2)}%`);
    console.log(`${((p2Count/numsArray[0])*100).toFixed(2)}%`);
    console.log(`${((p3Count/numsArray[0])*100).toFixed(2)}%`);
    console.log(`${((p4Count/numsArray[0])*100).toFixed(2)}%`);
    console.log(`${((p5Count/numsArray[0])*100).toFixed(2)}%`);
}

histogramLooper([7,
800,
801,
250,
199,
399,
599,
799])
;