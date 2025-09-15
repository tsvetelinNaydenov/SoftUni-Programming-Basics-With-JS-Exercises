function multiplicationTable(){
    for(let multiplier1=1; multiplier1<11; multiplier1++){
        for(let multiplier2=1; multiplier2<11; multiplier2++){
            console.log(`${multiplier1} * ${multiplier2} = ${multiplier1 * multiplier2}`);
        }
    }
}

multiplicationTable();