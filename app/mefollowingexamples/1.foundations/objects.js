/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Objects')
/* coding examples */

// object - collection of grouped variables
var person = {
	name: "Saul Tobias",
	age: 23,
	hasDriverLicence: true,
	dateOfbirth: "06/02/1996",
	address: {
		firstLine: "123",
		postCode: "SE1",
		country: "USA"
	}
};

log(JSON.stringify(person));

//access individual properties of object
log("Name: " + person.name);
log("Age: " + person.age);
log("Has Driver Licence: " + person.hasDriverLicence);
log("Address" + JSON.stringify(person.address));

log(Object.values(person));