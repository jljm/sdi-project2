// SDI Project 2
// Jamal Johnson

// Melon Variables
var fruitMelon = 4;
var fruitMelonNeed = 16;
var enoughMelons;

// -- Boolean Function
// Got enough ______?
var invCheck = function( item, have, need )
{
	if( have >= need )
	{
		console.log( "We have " + have + " " + item + " and need " + need + ". We have enough!" )
		return true;
	}

	else
	{
		console.log( "We have " + have + " " + item + " and need " + need + ". We don't have enough!" )
		return false;
	}
}


// -- Main
// Melon check!
console.log( "We need " + fruitMelonNeed + " melons! Do we have enough?" );
enoughMelons = invCheck( "melons", fruitMelon, fruitMelonNeed );