function hospitalDoctorsHiring (HospitalData){
let period = Number(HospitalData[0]), treatedPatients = 0, untreatedPatients = 0, availableDoctors = 7;

    for(let index=1; index<=period; index++){
        let currentNumOfPatients = Number(HospitalData[index]);
        if(index % 3 === 0){
            if (treatedPatients < untreatedPatients) availableDoctors++;
        }
        if(currentNumOfPatients <= availableDoctors) treatedPatients += currentNumOfPatients;
        else{
            untreatedPatients += currentNumOfPatients - availableDoctors;
            treatedPatients += availableDoctors;
        } 
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospitalDoctorsHiring(["4",
"7",
"27",
"9",
"1"]);
