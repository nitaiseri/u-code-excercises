const coffeeShop = {
    beans: 40,
    money: 100,
    costOfBean: 2, //Shouldn't be Property of coffeeShop
  
    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },

    makeDrink: function (drinkType) {
        if (!(drinkType in this.drinkRequirements)){
            alert( "Sorry, we don’t make " + drinkType);
        }else if (this.drinkRequirements[drinkType] > this.beans){
            alert("Sorry, we’re all out of beans!");
        }else{
            this.beans -= this.drinkRequirements[drinkType];
        }
    }, 
    buyBeans: function(numBeans){
        if ((this.costOfBean * numBeans) > this.money){
            alert("Sorry, We don't have enough money! \n You can by " + (this.money/this.costOfBean) + " beans");
        }else{
            this.money -= this.costOfBean*numBeans;
            this.beans += numBeans;
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