function labTableCalculator(lenghtM, widthM){
    let usableWidthCM = (widthM * 100) - 100;
    let usableLenghtCM = lenghtM * 100;
    let totalTablesPerRow = Math.floor(usableWidthCM / 70);
    let totalTablesPerColon = Math.floor(usableLenghtCM / 120);
    let totalTablesInRoom = (totalTablesPerColon * totalTablesPerRow) - 3;

    console.log(totalTablesInRoom);
}

labTableCalculator(8.4, 5.2);