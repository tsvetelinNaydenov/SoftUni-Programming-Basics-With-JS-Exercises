function trainTheTrainersCalc(studentData){
    let numOfJudges=Number(studentData[0]), index=1, studentGrade=0;
    let totalGradeCount=0, totalGrades=0;

    while(studentData[index] !== 'Finish'){
        let currentPresentaion=studentData[index];
        let currentPresentaionGrade=0;

        for(let gradesIndex=1; gradesIndex<=numOfJudges; gradesIndex++){
            let currentGrade=Number(studentData[index + gradesIndex]);
            currentPresentaionGrade += currentGrade;
            totalGradeCount++;
            totalGrades += currentGrade;
        }
        console.log(`${currentPresentaion} - ${(currentPresentaionGrade/numOfJudges).toFixed(2)}.`);
        index += numOfJudges+1;
    }

    console.log(`Student's final assessment is ${(totalGrades/totalGradeCount).toFixed(2)}.`);
}

trainTheTrainersCalc(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);