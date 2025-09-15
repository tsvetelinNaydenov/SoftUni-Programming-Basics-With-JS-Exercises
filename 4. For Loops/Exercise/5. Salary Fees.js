function openTabsLoop (tabsArray){
    let remainingSalary = tabsArray[1];
    for(index=2; index<=tabsArray[0] + 2; index++){
        if(remainingSalary <= 0){ 
            console.log('You have lost your salary.');
            break;
        }
        else if(tabsArray[index] === 'Facebook') remainingSalary -= 150;
        else if(tabsArray[index] === 'Instagram') remainingSalary -= 100;
        else if(tabsArray[index] === 'Reddit') remainingSalary -= 50;
    }
    if(remainingSalary > 0) console.log(remainingSalary);
}
openTabsLoop([3,
500,
"Github.com",
"Stackoverflow.com",
"softuni.bg"]);