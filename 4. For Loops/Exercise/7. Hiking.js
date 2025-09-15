function peakHikingPlacer(hikersData){
    let peaks = [0, 0, 0, 0, 0];
    let totalGroups=Number(hikersData[0]);

    for(let index=1; index<totalGroups+1; index++){
        let currentGroup = Number(hikersData[index]);
        if(currentGroup<6) peaks[0] += currentGroup;
        else if(currentGroup>5 && currentGroup<13) peaks[1] += currentGroup;
        else if(currentGroup>12 && currentGroup<26) peaks[2] += currentGroup;
        else if(currentGroup>25 && currentGroup<41) peaks[3] += currentGroup;
        else peaks[4] += currentGroup;
    }
    
    let totalPeople = peaks[0]+peaks[1]+peaks[2]+peaks[3]+peaks[4];

    for(let index=0; index<5; index++){
        console.log(`${(peaks[index] / totalPeople * 100).toFixed(2)}%`);
    }
}

peakHikingPlacer(["3",
"5",
"20",
"8",]);