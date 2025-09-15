function specialNumFinder(userNum){
    let printSpecialNums='';
    
    for(let index=1111; index<=9999; index++){
        let currentNumToString=''+index;
        let specialNumFlag=true;

        for(let charCount=0; charCount<4; charCount++){
            let currentNumPosition = Number(currentNumToString.charAt(charCount));
            if(userNum % currentNumPosition !== 0){
                specialNumFlag=false;
                break;
            }
        }
        if(specialNumFlag)
            printSpecialNums += `${index} `;
    }

    console.log(printSpecialNums);
}

specialNumFinder(11);