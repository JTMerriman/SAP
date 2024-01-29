const Pet_slots = require("./Classes/Pet_slots/Pet_slots") 

const my_Pet_slots = new Pet_slots(5)

const GameLoop = () => {
    // while (true) {
    //     console.log(my_Pet_slots.slots)
    // }

    console.log(my_Pet_slots.slots)
    my_Pet_slots.Buying_Item("Woof", 2)
    console.log(my_Pet_slots.slots)  
    my_Pet_slots.Buying_Item("Honk", 2)
    console.log(my_Pet_slots.slots)  
    my_Pet_slots.Buying_Item("Oink", 2)
    console.log(my_Pet_slots.slots) 
    my_Pet_slots.Buying_Item("Hiss", 2)
    console.log(my_Pet_slots.slots) 
    my_Pet_slots.Buying_Item("Bark", 0)
    console.log(my_Pet_slots.slots) 
    my_Pet_slots.Buying_Item("Moo", 2)
    console.log(my_Pet_slots.slots) 
}

GameLoop()