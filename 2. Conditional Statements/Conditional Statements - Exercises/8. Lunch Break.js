function showsFreeTimeCalc(nameOfShow, durationOfShow, breakTime){
    let lunchTime = breakTime / 8;
    let freeTime = breakTime / 4;
    let leftTimeForShow = breakTime - (lunchTime + freeTime);

    if(leftTimeForShow >= durationOfShow)
        console.log(`You have enough time to watch ${nameOfShow} and left with ${Math.ceil(leftTimeForShow - durationOfShow)} minutes free time.`);
    else
        console.log(`You don't have enough time to watch ${nameOfShow}, you need ${Math.ceil(durationOfShow - leftTimeForShow)} more minutes.`)
}

showsFreeTimeCalc('Teen Wolf', 48, 60);