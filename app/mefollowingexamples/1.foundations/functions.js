/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Functions')
/* coding examples */

//definition of function
function addNumbers(num1, num2) {
	//function body
	var addition = num1 + num2;
	log("add numbers: " + addition);
}

function addNumbersReturnValue(num1, num2) {
	var addition = num1 + num2;
	return addition;
}

addNumbers(5, 4);
addNumbers(3, 3);
log(addNumbersReturnValue(2, 2));