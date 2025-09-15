function stepsCalculator(stepsData){
    let dailySteps = 0, index = 0;

    while(dailySteps < 10000){
        if(stepsData[index] === 'Going home'){
            dailySteps += Number(stepsData[index + 1]);
            break;
        }
        let currentSteps = Number(stepsData[index]);
        dailySteps += currentSteps;
        index++;
    }

    if(dailySteps >= 10000){
        console.log(`Goal reached! Good job!`);
        console.log(`${dailySteps - 10000} steps over the goal!`);
        }
    else
        console.log(`${10000 - dailySteps} more steps to reach goal.`);
}

stepsCalculator(["125",
"250",
"4000",
"30",
"2678",
"4682"]);