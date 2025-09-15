function outfitSelector (temperature, timeOfDay){
    let outfit;
    let shoes;

    if (temperature >= 10 && temperature <= 18){
        if(timeOfDay === 'Morning'){
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        }
        else if(timeOfDay === 'Afternoon' || timeOfDay === 'Evening'){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }
    else if (temperature > 18 && temperature <= 24){
        if(timeOfDay === 'Morning' || timeOfDay === 'Evening'){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
        else{
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
    }
    else if (temperature >= 25){
        if(timeOfDay === 'Morning'){
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
        else if(timeOfDay === 'Afternoon'){
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        }
        else if(timeOfDay === 'Evening'){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }

    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}

victorsOutfitAdvice(22, 'Afternoon');