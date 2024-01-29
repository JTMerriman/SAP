const Buying_Item = require("./Functions/Buying_Item") 

//to provide a space for pets to sit
class Pet_slots{
    constructor(length){
        this.length = length;
        this.slots = [];

        for (let i = 1; i <= 5; i++) {
            this.slots.push(null)
          }
    }

    Buying_Item = (Item,Position) => Buying_Item (this, Item,Position);

}
module.exports = Pet_slots;