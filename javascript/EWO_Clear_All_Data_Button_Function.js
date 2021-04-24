"use strict";

function EWO_Clear_All_Data_Button_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	EWO_Reminder_Six_Array = {};
	window.localStorage.clear();
	EWO_Build_Output_Function();

	console.log("Exiting " + EWO_Caller);
}
