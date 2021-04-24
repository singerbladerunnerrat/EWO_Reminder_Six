"use strict";

function EWO_Send_HTML_Body_To_Console_Function()
{
	"use strict";

	var caller = new Error().stack;
	caller = caller.split("\n")[1].trim();
	caller = caller.substring(3);
	caller = caller.substring(0, caller.indexOf("(") - 1);

	console.log("Entering " + caller + " - " + document.lastModified);

	console.log(document.body);

	console.log("Exiting " + caller);
}
