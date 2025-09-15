function weatherForcast(outsideCondition){
    if (outsideCondition === 'sunny')
        console.log(`It's warm outside!`);
    else
        console.log(`It's cold outside!`);
}

weatherForcast('cold');