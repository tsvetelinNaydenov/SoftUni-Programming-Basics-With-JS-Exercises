function areaOfFiguresCalculator(typeOfFigure, side1, side2){
    let area;
    if (typeOfFigure === 'square'){
        area = side1 * side1;
        console.log(area.toFixed(3));
    }
    else if (typeOfFigure === 'rectangle'){
        area = side1 * side2;
        console.log(area.toFixed(3));
    }
    else if (typeOfFigure === 'circle'){
        area = Math.PI * Math.pow(side1, 2);
        console.log(area.toFixed(3));
    }
    else if (typeOfFigure === 'triangle'){
        area = (side1 * side2) / 2;
        console.log(area.toFixed(3));
    }
}

areaOfFiguresCalculator('triangle', 4.5, 20);