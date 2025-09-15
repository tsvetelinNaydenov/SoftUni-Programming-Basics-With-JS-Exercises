function fruitShopPriceTable (fruit, dayOfWeek, sum){
    switch(dayOfWeek){
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':{
            switch(fruit){
                case 'banana':
                    console.log((2.5 * sum).toFixed(2));
                    break;
                case 'apple':
                    console.log((1.2 * sum).toFixed(2));
                   break;
                case 'orange':
                    console.log((0.85 * sum).toFixed(2));
                    break;
                case 'grapefruit':
                    console.log((1.45 * sum).toFixed(2));
                    break;
                case 'kiwi':
                    console.log((2.7 * sum).toFixed(2));
                    break;
                case 'pineapple':
                    console.log((5.5 * sum).toFixed(2));
                    break;
                case 'grapes':
                    console.log((3.85 * sum).toFixed(2));
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;
        }
        case 'Saturday':
        case 'Sunday':{
            switch(fruit){
                case 'banana':
                    console.log((2.7 * sum).toFixed(2));
                    break;
                case 'apple':
                    console.log((1.25 * sum).toFixed(2));
                    break;
                case 'orange':
                    console.log((0.9 * sum).toFixed(2));
                    break;
                case 'grapefruit':
                    console.log((1.6 * sum).toFixed(2));
                    break;
                case 'kiwi':
                    console.log((3 * sum).toFixed(2));
                    break;
                case 'pineapple':
                    console.log((5.6 * sum).toFixed(2));
                    break;
                case 'grapes':
                    console.log((4.2 * sum).toFixed(2));
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;
        }
        default:
            console.log('error');
            break;
    }
}

fruitShopPriceTable('grapes', 'April', 0.5);