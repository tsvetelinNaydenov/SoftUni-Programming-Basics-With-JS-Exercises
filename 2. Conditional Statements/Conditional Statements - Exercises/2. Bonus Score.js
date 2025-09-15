function gamePointsBunusAdder(gameScore){
    let gameBonus = 0;

    if (gameScore <= 100)
        gameBonus += 5;
    else if (gameScore > 100 && gameScore <= 1000)
        gameBonus = gameScore * 0.2;
    else
        gameBonus = gameScore * 0.1;

    if((gameScore % 2) === 0)
        gameBonus += 1;
    else if ((gameScore % 10) === 5)
        gameBonus += 2;

    console.log(gameBonus, (gameBonus + gameScore));
}

gamePointsBunusAdder(15875);