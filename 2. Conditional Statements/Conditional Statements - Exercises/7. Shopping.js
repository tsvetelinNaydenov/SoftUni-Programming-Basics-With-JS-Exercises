function pcShopCalc (petersBudget, sumOfGPU, sumOfCPU, sumOfRAM){
    let GPUPrice = sumOfGPU * 250;
    let CPUPrice = (GPUPrice * 0.35) * sumOfCPU;
    let RAMPrice = (GPUPrice * 0.1) * sumOfRAM;
    let totalPCCost = GPUPrice + CPUPrice + RAMPrice;

    if(sumOfGPU > sumOfCPU)
        totalPCCost *= 0.85;
    if(petersBudget >= totalPCCost)
        console.log(`You have ${(petersBudget - totalPCCost).toFixed(2)} leva left!`);
    else
        console.log(`Not enough money! You need ${(totalPCCost - petersBudget).toFixed(2)} leva more!`);
}

pcShopCalc(920.45, 3, 1, 1);