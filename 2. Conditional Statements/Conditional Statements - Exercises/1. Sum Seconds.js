function athletesTimeRecorder(timeOfAthlete1, timeOfAthlete2, timeOfAthlete3){
    let totalSeconds = timeOfAthlete1 + timeOfAthlete2 + timeOfAthlete3;
    let totalMinutes = Math.floor(totalSeconds / 60);
    let displaySeconds = totalSeconds % 60;

    if (displaySeconds <= 9)
        console.log(`${totalMinutes}:0${displaySeconds}`);
    else
        console.log(`${totalMinutes}:${displaySeconds}`);
}

athletesTimeRecorder(14, 12, 10);