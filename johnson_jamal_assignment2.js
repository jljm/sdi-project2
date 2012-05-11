// SDI Project 2
// Jamal Johnson

// Melon Variables
var fruitMelon = 15;
var fruitMelonNeed = 17;
var enoughMelons;	// Are there enough melons: True/False
var storeBuyCount;	// How much was stored or bought.

// Greeting Card Variables
var sender = "Kent"
var receiver = "Louis"

// Inventory
var fruitLabel = ["Apples", "Cantelopes", "Pineapples"];
var fruitStock = [23, 30, 16];
var fruitCount = 3

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

// -- Number Function
// How much to buy? How much to store?
var invDo = function( item, have, need )
{
	var difference = need - have;

	// Exactly enough, do nothing.
	if( difference === 0)
	{
		console.log( "We have exactly enough " + item + "!" );
		return difference;
	}

	// Not enough, purchase more
	if( difference > 0 )
	{
		for(var needed = difference; needed > 0; needed-- )
		{
			console.log( "Buying 1 " + item + "! Need " + (needed - 1) + " more!" )
		}

		return difference;
	}

	// Too much, store extras
	if( difference < 0 )
	{
		var nDifference = difference;
		difference = 0;

		while( nDifference < 0 )	// Flip difference to a positive value.
		{
			nDifference++;
			difference++;
		}

		for(var toStore = difference; toStore > 0; toStore-- )
		{
			console.log( "Storing 1 " + item + "! " + (toStore - 1) + " more to put away!" )
		}
		return difference;
	}
}

// -- String Function
// Generate greeting card
var greetCard = function( to, from )
{
	var greeting = "To: " + to + '\n' +
				   "From: " + from;

	return greeting;
}

// -- Array Function
// Restocker
var invStock = function( label, stock, itemCount )
{
	itemCount = itemCount - 1;	// Make variable easier to use with the array.

	for( var itemCurrent = 0; itemCurrent <= itemCount; itemCurrent++ )
	{
		console.log( "Restocking " + label[itemCurrent] + "!" )
		stock[itemCurrent] = stock[itemCurrent] + 5;
	}
	return stock;
}

// -- Main
// Restock fruit
console.log( "A new delievery of fruit is here!" )
newFruitStock = invStock( fruitLabel, fruitStock, fruitCount );

// Melon check!
console.log( "We forgot to check the melons. We need " + fruitMelonNeed + " melons. Do we have enough?" );
enoughMelons = invCheck( "melons", fruitMelon, fruitMelonNeed );
storeBuyCount = invDo( "melon", fruitMelon, fruitMelonNeed);

console.log( "The card for our first order will read: " + '\n' + greetCard( receiver, sender ) );

