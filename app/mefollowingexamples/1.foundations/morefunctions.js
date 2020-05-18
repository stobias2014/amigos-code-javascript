/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('More Functions')
/* coding examples */

var person = {name: "Saul", age: 23};
log(Object.keys(person));
log(Object.values(person));

log("Saul".toLowerCase());
log("Saul".toUpperCase());
log("Saul".endsWith("Saul"));
log("Saul".startsWith("Saul"));