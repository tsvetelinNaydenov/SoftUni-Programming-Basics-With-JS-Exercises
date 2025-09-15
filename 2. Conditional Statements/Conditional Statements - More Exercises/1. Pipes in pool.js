function poolStatusChecker (poolVolume, pipe1Pressure, pipe2Pressure, hours){
    let totalWaterFilled = (pipe1Pressure + pipe2Pressure) * hours;
    let pipe1TotalLiters = pipe1Pressure * hours;
    let pipe2TotalLiters = pipe2Pressure * hours;

    if(totalWaterFilled <= poolVolume)
        console.log(`The pool is ${((totalWaterFilled / poolVolume) * 100).toFixed(2)}% full. Pipe 1: ${((pipe1TotalLiters / totalWaterFilled) * 100).toFixed(2)}%. Pipe 2: ${((pipe2TotalLiters / totalWaterFilled) * 100).toFixed(2)}%.`);
    else
        console.log(`For ${hours} hours the pool overflows with ${totalWaterFilled - poolVolume} liters.`);
}

poolStatusChecker(100, 100, 100, 2.5);