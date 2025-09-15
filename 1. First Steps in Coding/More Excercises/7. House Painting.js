function housePaintingCalc(height, lenght, ceilingHeight){
    let squareSidesArea = 2 * (height * height) - (1.2 * 2);
    let rectangleSidesArea = 2 * (height * lenght) - 2 * (1.5 * 1.5);
    let ceilingRectanglesArea = 2 * (height * lenght);
    let ceilingTrianglesArea = 2 * (ceilingHeight * height / 2);
    let totalCeilingArea = ceilingRectanglesArea + ceilingTrianglesArea;
    let totalSidesArea = squareSidesArea + rectangleSidesArea;

    console.log((totalSidesArea / 3.4).toFixed(2));
    console.log((totalCeilingArea / 4.3).toFixed(2));
}

housePaintingCalc(6, 10, 5.2);