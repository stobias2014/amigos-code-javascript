/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Logical Operators');
/* coding examples */

var num1 = 10;
var num2 = 10;
var num3 = 5;

log("Variables = " + num1 + ", " + num2 + ", " + num3);

log("Comparison Operators");
log(num1 == num2);
log(num1 < num2);
log(num1 > num2);
log(num1 >= num2);
log(num1 <= num2);
log(num1 != num2);

log("Logical Operators");
log(num1 == num2 && num1 > num3);
log(num1 == num2 || num1 < num3);

log(!(num1 == num2));
log(!(num1 == num3));

if(num1 == num2) {
	log(num1 + " == " + num2);
}