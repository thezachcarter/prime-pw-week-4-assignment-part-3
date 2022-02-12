console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [ ]

function addItem( item ){
  ( basket.push(item) );
  return true;
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
    console.log(item);
  }//end for of loop
}//end listItems function

function empty ( basket ){

}//end empty function
