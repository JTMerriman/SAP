const Pet_slots = require("./Classes/Pet_slots") 

const my_Pet_slots = new Pet_slots(5)

const GameLoop = () => {
    while (true) {
        console.log(my_Pet_slots.slots)
    }
}

GameLoop()