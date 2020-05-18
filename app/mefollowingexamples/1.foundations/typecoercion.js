/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Type Coercion');

//type coercion 0 convert one type to another

/* coding examples */

//with type coercion
log("With type coercion");
log(typeof 0 + " " + typeof false);
log(0 == false);

log(typeof "0" + " " + typeof false);
log("0" == false);

log(typeof 1 + " " + typeof "1");
log(1 == "1");

//without type coercion
//use three equal sign for type to be true
//don't convert any of the types
log("Without type coercion");
log(typeof 0 + " " + typeof false);
log(0 === false);

log(typeof "0" + " " + typeof false);
log("0" === false);

log(typeof 1 + " " + typeof "1");
log(1 === "1");