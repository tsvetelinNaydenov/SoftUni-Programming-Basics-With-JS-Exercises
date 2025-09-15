function freeSpaceCalc(spaceData){
    let totalRoomCubics = Number(spaceData[0]) * Number(spaceData[1]) * Number(spaceData[2]);
    let index = 3;

    while (totalRoomCubics > 0){
        if(spaceData[index] === 'Done'){
            console.log(`${totalRoomCubics} Cubic meters left.`);
            break;
        }
        else{
            totalRoomCubics -= Number(spaceData[index]);
            index++;
        }
    }
    if(totalRoomCubics < 0)
        console.log(`No more free space! You need ${Math.abs(totalRoomCubics)} Cubic meters more.`);
}

freeSpaceCalc(["10", 
"1",
"2",
"4", 
"6",
"Done"]);