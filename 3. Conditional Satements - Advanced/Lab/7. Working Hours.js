function workingHoursChecker (hour, day){
    if(hour >= 10 && hour < 18){
        switch(day){
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
                console.log('open');
                break;
            case 'Sunday':
                console.log('closed'); 
        }
    }
    else
        console.log('closed');
}

workingHoursChecker(11, 'Sunday');