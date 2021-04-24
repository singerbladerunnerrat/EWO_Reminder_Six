"use strict";

function EWO_In_Days_Decrement_Function()
{
	"use strict";

	var caller = new Error().stack;
	caller = caller.split("\n")[1].trim();
	caller = caller.substring(3);
	caller = caller.substring(0, caller.indexOf("(") - 1);

	console.log("Entering " + caller + " - " + document.lastModified);

	EWO_In_Days-= arguments[0];
	var element = document.querySelector("#EWO_In_Days_ID");
	element.innerText = EWO_In_Days;

	console.log("Exiting " + caller);
}

function EWO_In_Days_Increment_Function()
{
	"use strict";

	var caller = new Error().stack;
	caller = caller.split("\n")[1].trim();
	caller = caller.substring(3);
	caller = caller.substring(0, caller.indexOf("(") - 1);

	console.log("Entering " + caller + " - " + document.lastModified);

	EWO_In_Days+= arguments[0];
	var element = document.querySelector("#EWO_In_Days_ID");
	element.innerText = EWO_In_Days;

	console.log("Exiting " + caller);
}

function EWO_In_Hours_Decrement_Function()
{
	"use strict";

	var caller = new Error().stack;
	caller = caller.split("\n")[1].trim();
	caller = caller.substring(3);
	caller = caller.substring(0, caller.indexOf("(") - 1);

	console.log("Entering " + caller + " - " + document.lastModified);

	EWO_In_Hours-= arguments[0];
	var element = document.querySelector("#EWO_In_Hours_ID");
	element.innerText = EWO_In_Hours;

	console.log("Exiting " + caller);
}

function EWO_In_Hours_Increment_Function()
{
	"use strict";

	var caller = new Error().stack;
	caller = caller.split("\n")[1].trim();
	caller = caller.substring(3);
	caller = caller.substring(0, caller.indexOf("(") - 1);

	console.log("Entering " + caller + " - " + document.lastModified);

	EWO_In_Hours+= arguments[0];
	var element = document.querySelector("#EWO_In_Hours_ID");
	element.innerText = EWO_In_Hours;

	console.log("Exiting " + caller);
}

function EWO_In_Minutes_Decrement_Function()
{
	"use strict";

	var caller = new Error().stack;
	caller = caller.split("\n")[1].trim();
	caller = caller.substring(3);
	caller = caller.substring(0, caller.indexOf("(") - 1);

	console.log("Entering " + caller + " - " + document.lastModified);

	EWO_In_Minutes-= arguments[0];
	var element = document.querySelector("#EWO_In_Minutes_ID");
	element.innerText = EWO_In_Minutes;

	console.log("Exiting " + caller);
}

function EWO_In_Minutes_Increment_Function()
{
	"use strict";

	var caller = new Error().stack;
	caller = caller.split("\n")[1].trim();
	caller = caller.substring(3);
	caller = caller.substring(0, caller.indexOf("(") - 1);

	console.log("Entering " + caller + " - " + document.lastModified);

	EWO_In_Minutes+= arguments[0];
	var element = document.querySelector("#EWO_In_Minutes_ID");
	element.innerText = EWO_In_Minutes;

	console.log("Exiting " + caller);
}

function EWO_In_Seconds_Decrement_Function()
{
	"use strict";

	var caller = new Error().stack;
	caller = caller.split("\n")[1].trim();
	caller = caller.substring(3);
	caller = caller.substring(0, caller.indexOf("(") - 1);

	console.log("Entering " + caller + " - " + document.lastModified);

	EWO_In_Seconds-= arguments[0];
	var element = document.querySelector("#EWO_In_Seconds_ID");
	element.innerText = EWO_In_Seconds;

	console.log("Exiting " + caller);
}

function EWO_In_Seconds_Increment_Function()
{
	"use strict";

	var caller = new Error().stack;
	caller = caller.split("\n")[1].trim();
	caller = caller.substring(3);
	caller = caller.substring(0, caller.indexOf("(") - 1);

	console.log("Entering " + caller + " - " + document.lastModified);

	EWO_In_Seconds+= arguments[0];
	var element = document.querySelector("#EWO_In_Seconds_ID");
	element.innerText = EWO_In_Seconds;

	console.log("Exiting " + caller);
}
