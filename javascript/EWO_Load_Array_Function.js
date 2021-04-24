"use strict";

function EWO_Load_Array_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);
	
	EWO_Reminder_Six_Array = JSON.parse(window.localStorage.getItem("EWO_Reminder_Six_Array"));

	if (EWO_Reminder_Six_Array === null)
	{
		EWO_Reminder_Six_Array = [];
	}

	console.log("Exiting " + EWO_Caller);
}
