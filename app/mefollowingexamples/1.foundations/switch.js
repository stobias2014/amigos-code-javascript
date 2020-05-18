require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Switch');
/* coding examples */

var person = {
	name: "Saul",
	age: 17
};

switch(person.age) {
	case 17:
		log(person.name + " is 17");
		break;
	case 18:
		log(person.name + " is 18");
		break;
	case 19:
		log(person.name + " is 19");
		break;
	default:
		log(person.name + " do not know age");
		
}

switch(true) {
	case (person.age == 17):
		log(person.name + " is 17");
		break;
	case (person.age == 18):
		log(person.name + "is 18");
		break;
	case (person.age == 19):
		log(person.name + " is 19");
		break;
	default:
		log(person.name + " default case");
}

switch(new Date().getDay()) {
	case 1:
		log("Monday");
		break;
	default:
		log("i dont know");
}