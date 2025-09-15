function flowerShopCalc (sumOfMagnolia, sumOfHyacinth, sumOfRose, sumOfCactus, priceOfGift){
    let totalCostOfFlowers = sumOfMagnolia * 3.25 + sumOfHyacinth * 4 + sumOfRose * 3.5 + sumOfCactus * 8;
    totalCostOfFlowers *= 0.95;

    if(totalCostOfFlowers >= priceOfGift)
        console.log(`She is left with ${Math.floor(totalCostOfFlowers - priceOfGift)} leva.`);
    else
        console.log(`She will have to borrow ${Math.ceil(priceOfGift - totalCostOfFlowers)} leva.`);
}

flowerShopCalc(15, 7, 5, 10, 100);