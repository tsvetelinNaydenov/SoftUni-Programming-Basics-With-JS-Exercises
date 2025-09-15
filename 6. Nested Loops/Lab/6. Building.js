function buildingRoomsDisplay(floors, apartments){
    for(let index1=floors; index1>=1; index1--){
        let printLine='';
        for(let index2=0; index2<apartments; index2++){
            if (index1 === floors){
                printLine += `L${index1}${index2} `;
            }
            else if(index1 % 2 == 0)
                printLine += `O${index1}${index2} `;
            else
                printLine += `A${index1}${index2} `;
        }

        console.log(printLine);
    }
}
buildingRoomsDisplay(9, 5);