const Buying_Item = (OBJ, Item,Position) => {

        const Item_in_position = OBJ.slots [Position];
        const Item_in_position_before = OBJ.slots [Position-1];
        const Item_in_position_after = OBJ.slots [Position+1];

        if (!Item_in_position){
            OBJ.slots[Position] = Item
        }

        if (Item_in_position){
            if(!Item_in_position_before){
                OBJ.slots[Position-1] = Item_in_position
            }else if (!Item_in_position_after){
                OBJ.slots[Position+1] = Item_in_position
            }

            OBJ.slots[Position] = Item

        }

}

module.exports = Buying_Item;

//while there something existing in the chosen space, move the existing item to adjacent space and replace.
//when there are no spaces empty, either upgrade item or cancel.





//what are we buying (food cannot enter empty space)
//where are we placing it within slots
//Is something already in that position (level up or slide out the way (or no space))



