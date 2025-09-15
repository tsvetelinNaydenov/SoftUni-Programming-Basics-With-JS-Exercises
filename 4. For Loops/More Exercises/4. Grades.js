function gradeCalc (studentsData){
    let failGrade=0, weakGrade=0, midGrade=0, bestGrade=0;
    let combinedGrade=0, totalStudents=Number(studentsData[0]);

    for(let index=1; index<=totalStudents; index++){
        let currentGrade=Number(studentsData[index]);

        if(currentGrade<3) failGrade ++;
        else if(currentGrade<4) weakGrade ++;
        else if(currentGrade<5) midGrade ++;
        else bestGrade ++;

        combinedGrade += currentGrade;
    }

    console.log(`Top students: ${(bestGrade / totalStudents * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(midGrade / totalStudents * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(weakGrade / totalStudents * 100).toFixed(2)}%`);
    console.log(`Fail: ${(failGrade / totalStudents * 100).toFixed(2)}%`);
    console.log(`Average: ${(combinedGrade / totalStudents).toFixed(2)}`);
}

gradeCalc(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"]);