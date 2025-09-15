function footballFansSectors (stadiumData){
    let stadiumCapacity=Number(stadiumData[0]), totalFans=Number(stadiumData[1]);
    let fansA=0, fansB=0, fansV=0, fansG=0;

    for(let index=2; index<=totalFans+1; index++){
        switch(stadiumData[index]){
            case 'A':{fansA++;break;}
            case 'B':{fansB++; break;}
            case 'V':{fansV++;break;}
            case 'G': {fansG++;break}
        }
    }
    console.log(`${(fansA / totalFans * 100).toFixed(2)}%`);
    console.log(`${(fansB / totalFans * 100).toFixed(2)}%`);
    console.log(`${(fansV / totalFans * 100).toFixed(2)}%`);
    console.log(`${(fansG / totalFans * 100).toFixed(2)}%`);
    console.log(`${(totalFans / stadiumCapacity * 100).toFixed(2)}%`);
}

footballFansSectors(["1000",
"12",
"A",
"A",
"V",
"V",
"A",
"G",
"A",
"A",
"V",
"G",
"V",
"A"]);