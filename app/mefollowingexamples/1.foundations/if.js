/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('If');
/* coding examples */

var bool = true;

var person = {
	name: "saul",
	age: 16
};

if(bool) {
	log("bool is true");
} else {
	log("bool is false");
}

if(person.age > 18) {
	log(person.name + " is older than 18");
} else if (person.age == 16) {
	log(person.name + " is about to be an adult");
} else {
	log(person.name + " is not older than 18");
}