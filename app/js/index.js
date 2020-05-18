/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Variables')
/* coding examples */

//var is keyword for variable
//js makes inference of data types

var name = "Saul Tobias";
var age = 23;
var hasDriverLicence = true;
var empty = undefined;

log(name + " - Data Type: " + typeof(name));
log(age + " - Data Type: " + typeof(age));
log(hasDriverLicence + " - Data Type: " + typeof(hasDriverLicence));
log(empty + " - Data Type: " + typeof(empty));
