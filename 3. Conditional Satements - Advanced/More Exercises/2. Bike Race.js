function bikeRaceCharity (juniorBikers, seniorBikers, typeOfTrail){
    let totalCharity = 0;

    switch(typeOfTrail){
        case 'trail':{
            totalCharity = juniorBikers * 5.5 + seniorBikers * 7;
            break;
        }
        case 'cross-country':{
            if((juniorBikers + seniorBikers) >= 50)
                totalCharity = juniorBikers * 8 * 0.75 + seniorBikers * 9.5 * 0.75;
            else
              totalCharity = juniorBikers * 8 + seniorBikers * 9.5;
            
            break;
        }
        case 'downhill':{
            totalCharity = juniorBikers * 12.25 + seniorBikers * 13.75;
            break;
        }
        case 'road':{
            totalCharity = juniorBikers * 20 + seniorBikers * 21.5;
            break;
        }
    }
    totalCharity *= 0.95;
    console.log(totalCharity.toFixed(2));
}

bikeRaceCharity(3, 40, 'road');