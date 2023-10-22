function calculateProvisions(input) {
    const [N, players, groupEnergy, waterPerDay, foodPerDay, ...energyLoss] = input;
  
    let currentEnergy = groupEnergy;
    let currentWater = N * players * waterPerDay;
    let currentFood = N * players * foodPerDay;
  
    for (let day = 1; day <= N; day++) {
      currentEnergy -= energyLoss[day - 1];
      if (currentEnergy <= 0) {
        console.log(`You will run out of energy. You will be left with ${currentFood.toFixed(2)} food and ${currentWater.toFixed(2)} water.`);
        return;
      }
  
      if (day % 2 === 0) {
        const waterToDrink = 0.3 * currentWater;
        currentWater -= waterToDrink;
        currentEnergy += 0.05 * currentEnergy;
      }
  
      if (day % 3 === 0) {
        const foodToEat = currentFood / players;
        currentFood -= foodToEat;
        currentEnergy += 0.10 * currentEnergy;
      }
    }
  
    console.log(`You are ready for the quest. You will be left with - ${currentEnergy.toFixed(2)} energy!`);
  }