function changeReturn (change){
    let totalCoins = 0, leftChange = Math.round(change * 100), index = 0;
    let coins = [200, 100, 50, 20, 10, 5, 2, 1];

    while(leftChange > 0){
        if(leftChange >= coins[index]){
            leftChange -= coins[index];
            totalCoins++;
        }
        else index++;
    }

    console.log(totalCoins);
}

changeReturn(0.59);