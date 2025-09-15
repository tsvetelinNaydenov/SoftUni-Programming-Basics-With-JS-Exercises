function combinationsCalc(inputNumber){
    let totalCombinations=0;
    for(let index1=0; index1<=inputNumber; index1++){
        for(let index2=0; index2<=inputNumber; index2++){
            for(let index3=0; index3<=inputNumber; index3++){
                if((index1+index2+index3) === inputNumber)
                    totalCombinations++;
            }
        }
    }
    console.log(totalCombinations);
}
combinationsCalc(5);