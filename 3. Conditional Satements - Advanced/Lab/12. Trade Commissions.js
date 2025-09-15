function commissionCalculator(city, amount){
    if(city === 'Sofia'){
        if(amount >= 0 && amount <= 500)
            console.log((amount * 0.05).toFixed(2));
        else if(amount > 500 && amount <= 1000)
            console.log((amount * 0.07).toFixed(2));
        else if (amount > 1000 && amount <= 10000)
            console.log((amount * 0.08).toFixed(2));
        else if(amount > 10000)
            console.log((amount * 0.12).toFixed(2));
        else
            console.log('error');
    }
    else if(city === 'Varna'){
        if(amount >= 0 && amount <= 500)
            console.log((amount * 0.045).toFixed(2));
        else if(amount > 500 && amount <= 1000)
            console.log((amount * 0.075).toFixed(2));
        else if (amount > 1000 && amount <= 10000)
            console.log((amount * 0.1).toFixed(2));
        else if(amount > 10000)
            console.log((amount * 0.13).toFixed(2));
        else
            console.log('error');
    }
    else if(city === 'Plovdiv'){
        if(amount >= 0 && amount <= 500)
            console.log((amount * 0.055).toFixed(2));
        else if(amount > 500 && amount <= 1000)
            console.log((amount * 0.08).toFixed(2));
        else if (amount > 1000 && amount <= 10000)
            console.log((amount * 0.12).toFixed(2));
        else if(amount > 10000)
            console.log((amount * 0.145).toFixed(2));
        else
            console.log('error');
    }
    else
        console.log('error');
}

commissionCalculator('Varna', -1);