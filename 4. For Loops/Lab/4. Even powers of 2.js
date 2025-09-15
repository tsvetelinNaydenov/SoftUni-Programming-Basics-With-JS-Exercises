function evenPowersOfTwo (maxPower){
    for(i=0; i<=maxPower; i+=2){
        console.log(Math.pow(2, i));
    }
}

evenPowersOfTwo(7);