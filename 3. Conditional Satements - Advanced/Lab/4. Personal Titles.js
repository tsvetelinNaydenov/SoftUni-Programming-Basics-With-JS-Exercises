function personalTitles(age, gender){
    if(gender === 'f'){
        if(age < 16)
            console.log('Miss')
        else
            console.log('Ms.')
    }
    else{
        if(age < 16)
            console.log('Master')
        else
            console.log('Mr.')
    }
}
    
    personalTitles(16, 'f');