//chicken 10.35 lv, fish 12.4 lv, vegetarion 8.15 lv
//20% off bill
//delivery 2.5 lv

function restaurantBillCalulator(chicken, fish, veggie){
    let mainCourse = chicken * 10.35 + fish * 12.4 + veggie * 8.15;
    let desert = mainCourse * 0.2;
    
    console.log(mainCourse + desert + 2.5);
}

restaurantBillCalulator(2, 4, 3);