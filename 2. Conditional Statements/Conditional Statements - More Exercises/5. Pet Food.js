function petFoodChecker (daysGone, leftFoodKG, dogsNeedsKG, catsNeedsKG, turtlesNeedsGR){
    let totalPetNeeds = (daysGone * dogsNeedsKG) + (daysGone * catsNeedsKG) + (daysGone * turtlesNeedsGR)/1000;

    if(totalPetNeeds <= leftFoodKG)
        console.log(`${Math.floor(leftFoodKG - totalPetNeeds)} kilos of food left.`);
    else
        console.log(`${Math.ceil(totalPetNeeds - leftFoodKG)} more kilos of food are needed.`);
}

petFoodChecker(5, 10, 2.1, 0.8, 321);