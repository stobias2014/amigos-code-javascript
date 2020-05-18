/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Arrays')
/* coding examples */

//array able to hold multiple values
//able to store multiple data type
var name = "Alex";
var names = ["Alex", "Maria", "Saul", "Kareli"];

log(names);
log("names[0] = " + names[0]);
log("names[1] = " + names[1]);
log("names[2] = " + names[2]);
//a\grab length of array
log("Size = " + names.length);

// one method of looping array
for (var i of names) {
	log("name = " + i);
}

//another method
names.forEach(function(n, index) {
	log("names[" + index + "] = " + n);
});