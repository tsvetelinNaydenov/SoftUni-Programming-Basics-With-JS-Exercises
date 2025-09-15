function gasStatioPriceCalc (typeOfFuel, litersOfFuel, member){
    let totalPriceOfFuel = 0;
    switch(typeOfFuel){
        case 'Gasoline':{
            if(member === 'Yes')
                totalPriceOfFuel = (2.22 - 0.18) * litersOfFuel;
            else
                totalPriceOfFuel = litersOfFuel * 2.22;
            break;
        }
        case 'Diesel':{
            if(member === 'Yes')
                totalPriceOfFuel = (2.33 - 0.12) * litersOfFuel;
            else
                totalPriceOfFuel = litersOfFuel * 2.33;
            break;
        }
        case 'Gas':{
            if(member === 'Yes')
                totalPriceOfFuel = (0.93 - 0.08) * litersOfFuel;
            else
                totalPriceOfFuel = litersOfFuel * 0.93;
            break;
        }
    }

    if(litersOfFuel >= 20 && litersOfFuel <= 25)
        totalPriceOfFuel *= 0.92;
    else if(litersOfFuel > 25)
        totalPriceOfFuel *= 0.9;

    console.log(`${totalPriceOfFuel.toFixed(2)} lv.`);
}

gasStatioPriceCalc('Diesel', 19, 'No');