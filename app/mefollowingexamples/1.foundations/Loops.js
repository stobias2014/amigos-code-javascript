/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Loops')
/* coding examples */

var people = [
	{ name: "Saul",age: 23 },
	{ name: "Maria",age: 30 }
];

var numbers = [1, 2, 3, 4, 5];

log("For Loop");
//one way of looping
for(var i = 0; i < numbers.length; i++) {
	log("i = " + i);
}

//looping through array of objects
for(var i =0; i < people.length; i++) {
	log(JSON.stringify(people[i]));
}

var number = 0;

log("While Lopp");
while(number < 5) {
	log("number = " + number);
	number++;
}

var i = 0;

log("Do-While Loop");
do {
	log(i);
	i++;
} while(i < 5);