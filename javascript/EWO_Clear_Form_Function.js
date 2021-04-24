"use strict";

function EWO_Clear_Form_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	document.querySelector("#EWO_Title_One_ID").value = "";
	document.querySelector("#EWO_Title_Two_ID").value = "";

	EWO_In_Days = 0;
	document.querySelector("#EWO_In_Days_ID").innerText = 0;
	EWO_In_Hours = 0;
	document.querySelector("#EWO_In_Hours_ID").innerText = 0;
	EWO_In_Minutes = 0;
	document.querySelector("#EWO_In_Minutes_ID").innerText = 0;
	EWO_In_Seconds = 0;
	document.querySelector("#EWO_In_Seconds_ID").innerText = 0;

	console.log("Exiting " + EWO_Caller);
}
