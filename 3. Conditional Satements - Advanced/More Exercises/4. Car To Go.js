function rentACarSelector (budget, season){
    let rentalClass = '';
    let typeOfCar = '';
    let costOfRental = 0;

    if(budget <= 100){
        rentalClass = 'Economy class';
        switch(season){
            case 'Summer':{
                typeOfCar = 'Cabrio';
                costOfRental = budget * 0.35;
                break;
            }
            case 'Winter':{
                typeOfCar = 'Jeep';
                costOfRental = budget * 0.65;
                break;
            }
        }
    }
    else if(budget >= 101 && budget <= 500){
        rentalClass = 'Compact class';
        switch(season){
            case 'Summer':{
                typeOfCar = 'Cabrio';
                costOfRental = budget * 0.45;
                break;
            }
            case 'Winter':{
                typeOfCar = 'Jeep';
                costOfRental = budget * 0.8;
                break;
            }
        }
    }
    else if(budget > 500){
        rentalClass = 'Luxury class';
        typeOfCar = 'Jeep';
        costOfRental = budget * 0.9;
    }

    console.log(`${rentalClass}`);
    console.log(`${typeOfCar} - ${costOfRental.toFixed(2)}`);
}

rentACarSelector(1010, 'Winter');