function passwordChecker (userData){
    let userName=userData[0];
    let userPassword=userData[1];
    let passwordToBeChecked = userData[2];
    let index=3;

    while(passwordToBeChecked !== userPassword){
        passwordToBeChecked = userData[index];
        index++;
    }
    console.log(`Welcome ${userName}!`);
}

passwordChecker(["Gosho",
"secret",
"secret"]);