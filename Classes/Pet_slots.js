class Pet_slots{
    constructor(length){
        this.length = length;
        this.slots = [...Array(length)].map(i=>null);
    }
}

module.exports = Pet_slots;