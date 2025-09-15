function examPreparationHelper(problems){
    let badGrades = Number(problems[0]), badGradesReached = 0, badGradesFlag = false;
    let sumOfGrades = 0, totalNumOfGrades = 0, index = 1, lastProblem = '';

    while(problems[index] !== 'Enough'){
        let currentGrade = Number(problems[index+1])
        if(currentGrade <= 4)
            badGradesReached++;
        if(badGradesReached === badGrades){
            console.log(`You need a break, ${badGradesReached} poor grades.`);
            badGradesFlag = true;
            break;
        }
        lastProblem = problems[index];
        sumOfGrades += currentGrade;
        totalNumOfGrades++;
        index += 2;
    }
    if(!badGradesFlag){
        console.log(`Average score: ${(sumOfGrades / totalNumOfGrades).toFixed(2)}`);
        console.log(`Number of problems: ${totalNumOfGrades}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparationHelper(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);