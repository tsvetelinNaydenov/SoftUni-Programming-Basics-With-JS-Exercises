function smallShopPurchaseTerminal(product, city, sum){
    let totalCost = 0;
    if(city === 'Sofia'){
        switch(product){
            case 'coffee':
                totalCost = 0.5 * sum;
                break;
            case 'water':
                totalCost = 0.8 * sum;
                break;
            case 'beer':
                totalCost = 1.2 * sum;
                break;
            case 'sweets':
                totalCost = 1.45 * sum;
                break;
            case 'peanuts':
                totalCost = 1.6 * sum;
                break;
        }
    }
        else if (city === 'Plovdiv'){
            switch(product){
            case 'coffee':
                totalCost = 0.4 * sum;
                break;
            case 'water':
                totalCost = 0.7 * sum;
                break;
            case 'beer':
                totalCost = 1.15 * sum;
                break;
            case 'sweets':
                totalCost = 1.3 * sum;
                break;
            case 'peanuts':
                totalCost = 1.5 * sum;
                break;
            }
        }
        else{
            switch(product){
            case 'coffee':
                totalCost = 0.45 * sum;
                break;
            case 'water':
                totalCost = 0.7 * sum;
                break;
            case 'beer':
                totalCost = 1.1 * sum;
                break;
            case 'sweets':
                totalCost = 1.35 * sum;
                break;
            case 'peanuts':
                totalCost = 1.55 * sum;
                break;
            }
        }
    console.log(totalCost);
}

smallShopPurchaseTerminal('sweets', 'Sofia', 2.23);