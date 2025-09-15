function oldBookStoreChecker(inventory){
    let desireBook = inventory[0];
    let bookIsFound = false, index = 1;

    while(inventory[index] !== 'No More Books'){
        if (inventory[index] === desireBook){
            bookIsFound = true;
            break;
        }
        index++;
    }

    if (bookIsFound === true){
        console.log(`You checked ${index-1} books and found it.`)
    }
    else{
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index-1} books.`);
    }
}

oldBookStoreChecker(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"]);