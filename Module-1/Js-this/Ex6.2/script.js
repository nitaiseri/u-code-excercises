const coffeeShop = {
    beans: 40,
    money: 100,
    costOfBean: 2, //Shouldn't be Property of coffeeShop
  
    drinkRequirements: {
        latte: {beansRequirements: 10, price: 5},
        americano: {beansRequirements: 5, price: 5},
        doubleShot: {beansRequirements: 15, price: 5},
        frenchPress: {beansRequirements: 12, price: 5}
    },

    makeDrink: function (drinkType) {
        if (!(drinkType in this.drinkRequirements)){
            alert( "Sorry, we don’t make " + drinkType);
        }else if (this.drinkRequirements[drinkType].beansRequirements > this.beans){
            alert("Sorry, we’re all out of beans!");
        }else{
            this.beans -= this.drinkRequirements[drinkType].beansRequirements;
        }
    }, 

    buyBeans: function(numBeans){
        if ((this.costOfBean * numBeans) > this.money){
            alert("Sorry, We don't have enough money! \n You can by " + (this.money/this.costOfBean) + " beans");
        }else{
            this.money -= this.costOfBean*numBeans;
            this.beans += numBeans;
        }
    },

    buyDrink: function(drinkType){
        if (!(drinkType in this.drinkRequirements)){
            alert( "Sorry, we don’t make " + drinkType);
        } else{
            this.money += this.drinkRequirements[drinkType].price;
            this.makeDrink(drinkType);
        }    
    }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(200);
coffeeShop.buyBeans(50);
coffeeShop.buyDrink("latte");