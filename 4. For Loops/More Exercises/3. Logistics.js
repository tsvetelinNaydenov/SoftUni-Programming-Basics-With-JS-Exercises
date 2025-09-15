function logisticsCalc (loadsData){
    let totalNumOfLoads=Number(loadsData[0]), averageCostPerTon=0;
    let totalWeight=0, busLoad=0, truckLoad=0, trainLoad=0;

    for(let index=1; index<=totalNumOfLoads; index++){
        let currentLoad=Number(loadsData[index]);
        if(currentLoad < 4) busLoad += currentLoad;
        else if (currentLoad < 12) truckLoad += currentLoad;
        else trainLoad += currentLoad;

        totalWeight += currentLoad;
    }

    console.log(`${((busLoad * 200 + truckLoad * 175 + trainLoad * 120) / totalWeight).toFixed(2)}`);
    console.log(`${(busLoad / totalWeight * 100).toFixed(2)}%`);
    console.log(`${(truckLoad / totalWeight * 100).toFixed(2)}%`);
    console.log(`${(trainLoad / totalWeight * 100).toFixed(2)}%`);
}

logisticsCalc(["5",
"2",
"10",
"20",
"1",
"7"]);
