function pyramidDisplay(endNum){
    let current=1, flag=false, printCurrentLine='';

    for(let rows=1; rows<=endNum; rows++){
        for(let cols=1; cols<=rows; cols++){
            if(current>endNum){
                flag=true;
                break
            }
            printCurrentLine += current + ' ';
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = '';
        if(flag)
            break;
    }
}
pyramidDisplay(7);