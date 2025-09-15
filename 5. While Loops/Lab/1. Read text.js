function readAndStopLoop (namesData){
    let index=0;
    while(namesData[index] !== 'Stop'){
        console.log(namesData[index]);
        index++;
    }
}
readAndStopLoop(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"]);