function truckDriverSalaryCalc (season, milage){
    let totalSalary=0;

    if((season==='Autumn' || season==='Spring') && milage<=5000) totalSalary = 0.75*milage*4;
    else if(season==='Summer' && milage<=5000) totalSalary = 0.9*milage*4;
    else if(season==='Winter' && milage<=5000) totalSalary = 1.05*milage*4;
    else if((season==='Autumn' || season==='Spring') && milage<=10000) totalSalary = 0.95*milage*4;
    else if(season==='Summer' && milage<=10000) totalSalary = 1.1*milage*4;
    else if(season==='Winter' && milage<=10000) totalSalary = 1.25*milage*4;
    else totalSalary = 1.45*milage*4;

    console.log((totalSalary * 0.9).toFixed(2));
}

truckDriverSalaryCalc('Spring', 1600);