function wineProductionCalc(areaOfGrapes, hravestPerSqM, neededWine, sumOfWorkers){
    let totalWineProducedKG = (areaOfGrapes * 0.4) * hravestPerSqM;
    let totalWineProducedL = totalWineProducedKG / 2.5;

    if(totalWineProducedL < neededWine){
        console.log(`It will be a tough winter! More ${Math.floor(neededWine - totalWineProducedL)} liters wine needed.`);
    }
    else{
        let leftWine = Math.ceil(totalWineProducedL - neededWine);
        let winePerPerson = Math.ceil(leftWine / sumOfWorkers);

        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWineProducedL)} liters.`);
        console.log(`${leftWine} liters left -> ${winePerPerson} liters per person.`)
    }
}

wineProductionCalc(1020, 1.5, 425, 4);