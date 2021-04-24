"use strict";

function EWO_Save_Button_Function()
{
    "use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	EWO_Reminder_Six_Array[arguments[0]].EWO_Saved = true;

	EWO_Clear_Form_Function();
	EWO_Sort_Array_Function();
	EWO_Save_Array_Function();
	EWO_Build_Output_Function();

	EWO_Audio_Click.play();
	
	
	console.log("Exiting " + EWO_Caller);
}
