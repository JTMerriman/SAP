const Buying_Item = (OBJ, Item,Position) => {

        const Item_in_position = OBJ.slots [Position];

        if (!Item_in_position){
            OBJ.slots[Position] = Item;

            return;
        }
        
        // Split the slots before the position and the slots after the position into 2 separate arrays
        // using an array method called "slice" (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
        const slotsBefore = OBJ.slots.slice(0, Position);
        const slotsAfter = OBJ.slots.slice(Position + 1, OBJ.slots.length);

        // Check if there is an empty slot before or after the position (or both)
        // using an array method called "indexOf" (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
        const isEmptySlotBefore = slotsBefore.indexOf(null) !== -1;
        const isEmptySlotAfter = slotsAfter.indexOf(null) !== -1;

        if (!isEmptySlotBefore && !isEmptySlotAfter) {
            // If there is no empty slot found before or after, return an error in the console
            console.log("Error: Could not add '" + Item + "'... SLOTS FULL!!!");

            return;
        }

        // Create a reusable function that we can use for either the slots before or the slots after
        const replaceFirstEmpty = (slots) => {
            const positionOfEmpty = slots.indexOf(null);

            // Remove the first empty position of the given slots slice
            // using an array method called "splice" (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
            slots.splice(positionOfEmpty, 1);

            // Add the item that was in the position we want to the start of the given slots slice
            // using an array method called "unshift" (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
            slots.unshift(Item_in_position);
        }

        if (isEmptySlotBefore) {
            // We need to reverse the order of the slots before the position as we are working away from the given position
            // using an array method called "reverse" (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
            slotsBefore.reverse();

            replaceFirstEmpty(slotsBefore);

            slotsBefore.reverse();
        } else if (isEmptySlotAfter) {
            replaceFirstEmpty(slotsAfter);
        }

        // We piece the outputs together using the "..." operator to spread the items of the arrays into a new array
        // (Item does not need spreading as it is a string, not an array)
        // and replace the previous OBJ slots with it
        // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
        OBJ.slots = [...slotsBefore, Item, ...slotsAfter];

}

module.exports = Buying_Item;

//while there something existing in the chosen space, move the existing item to adjacent space and replace.
//when there are no spaces empty, either upgrade item or cancel.





//what are we buying (food cannot enter empty space)
//where are we placing it within slots
//Is something already in that position (level up or slide out the way (or no space))



