"use strict";

function EWO_Edit_Button_Function()
{
    "use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	document.querySelector("#EWO_Title_One_ID").value = EWO_Reminder_Six_Array[arguments[0]].EWO_Title_One;
	document.querySelector("#EWO_Title_Two_ID").value = EWO_Reminder_Six_Array[arguments[0]].EWO_Title_Two;

	EWO_Reminder_Six_Array.splice(arguments[0], 1);
	EWO_Save_Array_Function();
	EWO_Build_Output_Function();

	EWO_Audio_Click.play();
	
	console.log("Exiting " + EWO_Caller);
}
