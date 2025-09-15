function bookReadHelper(booksSize, pagesPerH, dayInterval){
    let dailyReadCount = (booksSize / pagesPerH) / dayInterval;

    console.log(dailyReadCount);
}

bookReadHelper(432, 15, 4);