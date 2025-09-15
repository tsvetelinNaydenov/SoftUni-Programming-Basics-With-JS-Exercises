function fishMarketCalculator (macarelPrice, spratPrice, palamudMass, safridMass, midiMass){
    let palamudCost = (macarelPrice * 1.6) * palamudMass;
    let safridCost = (spratPrice * 1.8) * safridMass;
    let midiCost = midiMass * 7.5;
    let totalCost = palamudCost + safridCost + midiCost;

    console.log(totalCost.toFixed(2));
}

fishMarketCalculator(5.55, 3.57, 4.3, 3.6, 7);
