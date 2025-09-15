function vacationSelector (budget, season){
    let location='', typeOfStay='', priceOfVacation=0;
     
    if(budget<=1000){
        typeOfStay = 'Camp';
        switch(season){
            case 'Summer':{
                location = 'Alaska';
                priceOfVacation = budget * 0.65;
                break;
            }
            case 'Winter':{
                location = 'Morocco';
                priceOfVacation = budget * 0.45;
                break;
            }
        }
    }
    else if(budget<=3000){
        typeOfStay = 'Hut';
        switch(season){
            case 'Summer':{
                location = 'Alaska';
                priceOfVacation = budget * 0.8;
                break;
            }
            case 'Winter':{
                location = 'Morocco';
                priceOfVacation = budget * 0.6;
                break;
            }
        }
    }
    else{
        typeOfStay = 'Hotel';
        switch(season){
            case 'Summer':{
                location = 'Alaska';
                priceOfVacation = budget * 0.9;
                break;
            }
            case 'Winter':{
                location = 'Morocco';
                priceOfVacation = budget * 0.9;
                break;
            }
        }
    }
    console.log(`${location} - ${typeOfStay} - ${priceOfVacation.toFixed(2)}`);
}

vacationSelector(3460, 'Summer');