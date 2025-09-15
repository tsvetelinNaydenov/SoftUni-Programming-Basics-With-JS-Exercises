function examTimeChecker (hourOfExam, minOfExam, hourOfArrival, minOfArrival){
    let totalExamMins = hourOfExam * 60 + minOfExam;
    let totalArrivalMins = hourOfArrival * 60 + minOfArrival;

    if(totalArrivalMins <= totalExamMins){
        let earlyMins = totalExamMins - totalArrivalMins;

        if(earlyMins <= 30 && earlyMins != 0){
            console.log('On Time');
            console.log(`${earlyMins} minutes before the start`);
        }
        else if(earlyMins > 30 && earlyMins < 60){
            console.log('Early');
            console.log(`${earlyMins} minutes before the start`);
        }
        else if(earlyMins >= 60){
            let earlyHours = Math.floor(earlyMins / 60);

            console.log('Early');
            console.log(`${earlyHours}:${(earlyMins % 60).toString().padStart(2, '0')} hours before the start`);
        }
        else
            console.log('On Time');
    }
    else if(totalArrivalMins > totalExamMins){
        let lateMins = totalArrivalMins - totalExamMins;

        if(lateMins >= 60){
            let lateHours = Math.floor(lateMins / 60);
            console.log('Late');
            console.log(`${lateHours}:${(lateMins % 60).toString().padStart(2, '0')} hours after the start`);
        }
        else{
            console.log('Late');
            console.log(`${lateMins} minutes after the start`);
        }
    }
}

examTimeChecker(16, 0, 15, 0);