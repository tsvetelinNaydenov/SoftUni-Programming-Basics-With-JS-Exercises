function aquariumWaterCalulator(length, width, height, percent){
    let totalDM = (length * width * height) / 1000;
    let totalLiters = totalDM - (totalDM * (percent / 100));

    console.log(totalLiters);
}

aquariumWaterCalulator(105, 77, 89, 18.5);