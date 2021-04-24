"use strict";

function EWO_Error_Function()
{
    "use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	console.log(arguments[0]);
	document.querySelector("#EWO_Error_Output_ID").innerHTML = arguments[0];

	console.log("Exiting " + EWO_Caller);
}
