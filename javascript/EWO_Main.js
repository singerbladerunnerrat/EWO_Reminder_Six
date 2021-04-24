"use strict";

var EWO_Audio_Click = new Audio("EWO_Click_Sound.wav");
var EWO_Audio_Alarm = new Audio("EWO_Alarm_Sound.mp3");

var EWO_Reminder_Six_Array = {};

var EWO_Days_Of_The_Week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var EWO_Months_Of_The_Year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var EWO_At_Day = 0;
var EWO_At_Hour = 0;
var EWO_At_Minute = 0;
var EWO_At_Month = 0;

var EWO_In_Days = 0;
var EWO_In_Hours = 0;
var EWO_In_Minutes = 0;
var EWO_In_Seconds = 0;

function EWO_Main_Function()
{
	"use strict";
	
	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);
	
	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	EWO_Load_Array_Function();
	EWO_Sort_Array_Function();
	EWO_Build_Output_Function();

	window.setInterval(EWO_Build_Output_Function, 30000);
	
	console.log("Exiting " + EWO_Caller);
}
