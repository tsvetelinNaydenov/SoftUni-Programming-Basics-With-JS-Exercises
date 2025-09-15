//Пакет химикали - 5.80 лв. 
//Пакет маркери - 7.20 лв. 
//Препарат - 1.20 лв (за литър)

function suppliesStoreCalulator(penPacks, markerPacks, cleanerInL, discount){
    let totalPrice = penPacks * 5.8 + markerPacks * 7.2 + cleanerInL * 1.2;
    totalPrice -= (totalPrice * (discount / 100));

    console.log(totalPrice);
}

suppliesStoreCalulator(4, 2, 5, 13);