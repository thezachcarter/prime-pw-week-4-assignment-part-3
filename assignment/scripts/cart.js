console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [ ]
const maxItems = 5

/*
function addItem( item ){
  ( basket.push( item ) );
  return true;
}//end addItem function
console.log( `basket is ${basket}`);
*/
// saved for reference and in case I break something

function isFull( basket, maxItems ){
  if ( basket.length <= maxItems ){
    return true;
  } else {
    console.log ('Too many items in basket!');
    return false;
  }// end if else
}//end full function

function addItem( item ){
  if ( isFull( basket , maxItems ) == false ){
    return false; }
    else { basket.push( item );
    return true; }// end if else
}//end addItem function
console.log( `basket is ${basket}`);

addItem( 'chiken' );
console.log( `basket is ${basket}`);

addItem( 'mayo' );
console.log( `basket is ${basket}`);

addItem( 'pickles' );
console.log( `basket is ${basket}`);

function listItems( basket ){
  for( item of basket){
    console.log( item );
  }//end for of loop
}//end listItems function

console.log( listItems( basket ) );

function empty ( basket ){
  (basket.length = 0);
}//end empty function

empty( basket );
console.log( `basket is ${basket}`);

addItem( 'bacon' );
console.log( `basket is ${basket}`);

addItem( 'lettuce' );
console.log( `basket is ${basket}`);

addItem( 'tomato' );
console.log( `basket is ${basket}`);

addItem( 'bread' );
console.log( `basket is ${basket}`);

addItem( 'mayo' );
console.log( `basket is ${basket}`);

addItem( 'avocado' );
console.log( `basket is ${basket}`);

addItem( 'jalapeno' );
console.log( `basket is ${basket}`);

console.log( listItems( basket ) );

empty( basket );
console.log( `basket is ${basket}`);
