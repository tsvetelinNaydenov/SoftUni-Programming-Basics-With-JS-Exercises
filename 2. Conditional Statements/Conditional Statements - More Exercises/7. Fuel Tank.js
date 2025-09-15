function fuelTankChecker (typeOfFuel, litersOfFuel){
    switch(typeOfFuel){
        case 'Diesel':{
            if(litersOfFuel >= 25)
                console.log('You have enough diesel.');
            else
                console.log('Fill your tank with diesel!')
            break;
        }
        case 'Gasoline':{
            if(litersOfFuel >= 25)
                console.log('You have enough gasoline.');
            else
                console.log('Fill your tank with gasoline!')
            break;
        }
        case 'Gas':{
            if(litersOfFuel >= 25)
                console.log('You have enough gas.');
            else
                console.log('Fill your tank with gas!')
            break;
        }
        default:
            console.log('Invalid fuel!');
    }
}

fuelTankChecker('Gas', 25);