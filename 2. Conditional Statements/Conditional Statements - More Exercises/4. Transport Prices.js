function transportCalculator (distance, timeOfDay){
    let costOfTrip = 0;

    if(distance < 20 && timeOfDay === 'day')
        costOfTrip = 0.7 + (distance * 0.79);
    else if(distance < 20 && timeOfDay === 'night')
        costOfTrip = 0.7 + (distance * 0.9);
    else if(distance >= 20 && distance < 100)
        costOfTrip =  distance * 0.09;
    else
        costOfTrip = distance * 0.06;

    console.log(costOfTrip.toFixed(2));
}

transportCalculator(180, 'night');