function tripSelector (budget, season){
    let spendMoney = 0;
    let destination = '';
    let typeOfVaction = '';

    if(budget <= 100){
        destination = 'Bulgaria';

        switch(season){
            case 'summer':{
                spendMoney = budget * 0.3;
                typeOfVaction = 'Camp';
                break;
            }
            case 'winter':{
                spendMoney = budget * 0.7;
                typeOfVaction = 'Hotel';
                break;
            }
        }
    }
    else if(budget <= 1000){
        destination = 'Balkans';

        switch(season){
            case 'summer':{
                spendMoney = budget * 0.4;
                typeOfVaction = 'Camp';
                break;
            }
            case 'winter':{
                spendMoney = budget * 0.8;
                typeOfVaction = 'Hotel';
                break;
            }
        }
    }
    else{
        destination = 'Europe';
        spendMoney = budget * 0.9;
        typeOfVaction = "Hotel";
    }
    
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfVaction} - ${spendMoney.toFixed(2)}`);
}

tripSelector(1500, 'winter');