function cakeCounter(cakeData){
    let cakePieces = Number(cakeData[0]) * Number(cakeData[1]), index = 2;

    while(cakePieces > 0){
        if(cakeData[index] === 'STOP'){
            console.log(`${cakePieces} pieces are left.`);
            break;
        }
        else{
            cakePieces -= Number(cakeData[index]);
        }
        index++;
    }

    if(cakePieces <= 0)
        console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
}

cakeCounter(["10",
"2",
"2",
"4",
"6",
"STOP"]);