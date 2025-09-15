//Предпазен найлон - 1.50 лв. за кв. метър + 2кв
//Боя - 14.50 лв. за литър + 10%
//Разредител за боя - 5.00 лв. за литър
//Да се добавят 0.40 ст. за торбички

function repaintingCalculator(plasticProtector, paintInL, paintThinner, workersHours){
    plasticProtector += 2;
    paintInL *= 1.1;
    let totalPriceForMaterial = plasticProtector * 1.5 + paintInL * 14.5 + paintThinner * 5 + 0.4;
    let workersPrice = (totalPriceForMaterial * 0.3) * workersHours;

    console.log(workersPrice + totalPriceForMaterial);
}

repaintingCalculator(5, 10, 10, 1);