function numsDivisableByNineLoop (startNum, endNum){
    let sumOfResults = 0;
    for(i=startNum; i<=endNum; i++){
        if((i % 9) === 0)
            sumOfResults += i;
    }
    console.log(`The sum: ${sumOfResults}`);
    for(i=startNum; i<=endNum; i++){
        if((i % 9) === 0)
            console.log(i);
    }
}

numsDivisableByNineLoop(100, 200);