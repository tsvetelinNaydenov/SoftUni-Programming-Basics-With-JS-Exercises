function cinemaTicketsComputing(cinemaData){
    let ttlStndrdTcktas=0, ttlStudntTckts=0, ttlKidsTckts=0;
    let index=0;

    while(cinemaData[index] !== 'Finish'){
        let currentMovie=cinemaData[index];
        let movieTotalSeats= Number(cinemaData[index+1]);
        let standardTickets=0, studentTickets=0, kidsTickets=0, seatsTaken=0;;

        index+=2;
        while(cinemaData[index] !== 'End' && seatsTaken < movieTotalSeats){
            if(cinemaData[index] === 'Finish'){
                exitFlag=true;
                break;
            }
            switch(cinemaData[index]){
                case 'standard':{
                    standardTickets++;
                    ttlStndrdTcktas++;
                    break;
                } 
                case 'student':{
                    studentTickets++;
                    ttlStudntTckts++;
                    break;
                }
                case 'kid':{
                    kidsTickets++;
                    ttlKidsTckts++;
                    break;
                }
            }
                seatsTaken++;
                index++;
        }
        console.log(`${currentMovie} - ${((standardTickets+studentTickets+kidsTickets)/movieTotalSeats*100).toFixed(2)}% full.`);
            
        if(cinemaData[index] === 'Finish'){
            break; 
        }

        if(cinemaData[index] === 'End'){
            index++;
        }
    }
    let totalTickets = ttlStndrdTcktas+ttlStudntTckts+ttlKidsTckts;
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(ttlStudntTckts/totalTickets*100).toFixed(2)}% student tickets.`);
    console.log(`${(ttlStndrdTcktas/totalTickets*100).toFixed(2)}% standard tickets.`);
    console.log(`${(ttlKidsTckts/totalTickets*100).toFixed(2)}% kids tickets.`);
}

cinemaTicketsComputing(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"]);