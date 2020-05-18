/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Break-Continue');
/* coding examples */

var number = 0;

log("Using continue ");

while(number < 7) {

	number++;

	if (number < 3) {
		log(number + " is less than 3" + " so will continue");
		continue;
	}

	log(number);
	
}

var n = 0;

while(n < 5) {
	n++;
	log(n);
	if(n == 3) {
		log(n + " = 3 so will break");
		break;
	}
}