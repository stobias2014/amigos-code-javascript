/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Arithmetic Operators')
/* coding examples */

var num1 = 5;
var num2 = 3;

var addition = num1 + num2;
var subtraction= num1 - num2;
var mult = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

log("Variables: " + num1 + " and " + num2);

log("Additon = " + addition);
log("Subtraction = " + subtraction);
log("Multiplication = " + mult);
log("Divion = " + division);
log("Modulus = " + modulus);