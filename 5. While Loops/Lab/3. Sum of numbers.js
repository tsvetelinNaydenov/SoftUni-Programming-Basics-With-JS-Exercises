function sumOfNumbers (numbers){
    let endNum = Number(numbers[0]);
    let totalSumOfNums = Number(numbers[1]);
    let index = 2;

    while(totalSumOfNums < endNum){
        totalSumOfNums += Number(numbers[index]);
        index++;
    }
    console.log(totalSumOfNums);
}

sumOfNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);