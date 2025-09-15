function miniCalculator (num1, num2, operation){
    let operationResult = 0;
    switch(operation){
        case '+':{
            operationResult = num1 + num2;
            if((operationResult % 2) === 0)
                console.log(`${num1} ${operation} ${num2} = ${operationResult} - even`);
            else
                console.log(`${num1} ${operation} ${num2} = ${operationResult} - odd`);
        break;
        }
        case '-':{
          operationResult = num1 - num2;
            if((operationResult % 2) === 0)
                console.log(`${num1} ${operation} ${num2} = ${operationResult} - even`);
            else
                console.log(`${num1} ${operation} ${num2} = ${operationResult} - odd`);
        break;
        }
        case '*':{
          operationResult = num1 * num2;
            if((operationResult % 2) === 0)
                console.log(`${num1} ${operation} ${num2} = ${operationResult} - even`);
            else
                console.log(`${num1} ${operation} ${num2} = ${operationResult} - odd`);
        break;
        }
        case '/':{
            if(num2 === 0)
                console.log(`Cannot divide ${num1} by zero`);
            else{
                operationResult = (num1 / num2).toFixed(2);
                console.log(`${num1} ${operation} ${num2} = ${operationResult}`);
            }
        break;
        }
        case '%':{
            if(num2 === 0)
                console.log(`Cannot divide ${num1} by zero`);
            else{
            operationResult = num1 % num2;
            console.log(`${num1} ${operation} ${num2} = ${operationResult}`);
            }
        break;
        }
    }
}

miniCalculator(10, 0, '%');