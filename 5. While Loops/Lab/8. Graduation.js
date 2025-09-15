function graduationChecker(studentData){
    let studentName = studentData[0];
    let attempts = 2, totalGrades = 0, classAchieved = 1, index = 1;

    while(classAchieved < 13){
        let currentGrade = Number(studentData[index]);
        index++;
        if(currentGrade < 4){
            attempts--;
            if(attempts === 0){
                console.log(`${studentName} has been excluded at ${classAchieved} grade`);
                break;
            }
            continue;
        }
        else{
            totalGrades += currentGrade;
            classAchieved++;
        }
    }
    if (attempts !== 0){
    let averageGrade = totalGrades / 12;
    console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduationChecker(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);