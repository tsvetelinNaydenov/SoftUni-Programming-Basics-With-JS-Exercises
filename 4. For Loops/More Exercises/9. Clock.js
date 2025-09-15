function clockRun (){
    let hours=0, minutes=0;
    for(hours=0; hours<24; hours++){
        for(minutes=0; minutes<60; minutes++){
            console.log(`${hours} : ${minutes}`);
        }
    }
}
clockRun();