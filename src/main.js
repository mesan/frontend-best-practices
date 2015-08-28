require("babel/polyfill");

import printerController from "./js/printer";

var main = function () {
	let printer = printerController();
	
	printer.hello();
}();