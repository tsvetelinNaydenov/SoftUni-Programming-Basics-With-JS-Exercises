function cinemaTicketsComputing(cinemaData){
  let ttlStndrdTcktas = 0, ttlStudntTckts = 0, ttlKidsTckts = 0;
  let index = 0;

  while (index < cinemaData.length && cinemaData[index] !== 'Finish') {
    let currentMovie = cinemaData[index];
    let movieTotalSeats = Number(cinemaData[index + 1]);
    let standardTickets = 0, studentTickets = 0, kidsTickets = 0, seatsTaken = 0;
    index += 2;

    while (cinemaData[index] !== 'End' && cinemaData[index] !== 'Finish' && seatsTaken < movieTotalSeats) {
      switch (cinemaData[index]) {
        case 'standard': standardTickets++; ttlStndrdTcktas++; break;
        case 'student':  studentTickets++;  ttlStudntTckts++;  break;
        case 'kid':      kidsTickets++;     ttlKidsTckts++;    break;
      }
      seatsTaken++;
      index++;
    }
    console.log(`${currentMovie} - ${(seatsTaken / movieTotalSeats * 100).toFixed(2)}% full.`);
    if (index < cinemaData.length && cinemaData[index] === 'Finish') break;
    if (cinemaData[index] === 'End') index++;
  }

  const totalTickets = ttlStndrdTcktas + ttlStudntTckts + ttlKidsTckts;
  console.log(`Total tickets: ${totalTickets}`);
  if (totalTickets > 0) {
    console.log(`${(ttlStudntTckts/totalTickets*100).toFixed(2)}% student tickets.`);
    console.log(`${(ttlStndrdTcktas/totalTickets*100).toFixed(2)}% standard tickets.`);
    console.log(`${(ttlKidsTckts/totalTickets*100).toFixed(2)}% kids tickets.`);
  } else {
    console.log(`0.00% student tickets.`);
    console.log(`0.00% standard tickets.`);
    console.log(`0.00% kids tickets.`);
  }
}

cinemaTicketsComputing(["Shutter Island",
'9',
'standard',
'standard',
'standard',
'student',
'student',
'student',
'kid',
'kid',
'kid',
'Rush',
'9',
'standard',
'standard',
'standard',
'student',
'student',
'student',
'kid',
'kid']);