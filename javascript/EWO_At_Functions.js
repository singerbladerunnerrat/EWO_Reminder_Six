"use strict";

function EWO_At_Day_Decrement_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	EWO_At_Day-= arguments[0];
	var EWO_Element = document.querySelector("#EWO_At_Day_ID");
	EWO_Element.innerText = EWO_At_Day;

	console.log("Exiting " + EWO_Caller);
}

function EWO_At_Day_Increment_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	EWO_At_Day+= arguments[0];
	var EWO_Element = document.querySelector("#EWO_At_Day_ID");
	EWO_Element.innerText = EWO_At_Day;

	console.log("Exiting " + EWO_Caller);
}

function EWO_At_Hour_Decrement_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	EWO_At_Hour-= arguments[0];
	var EWO_Element = document.querySelector("#EWO_At_Hour_ID");
	EWO_Element.innerText = EWO_At_Hour;

	console.log("Exiting " + EWO_Caller);
}

function EWO_At_Hour_Increment_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	EWO_At_Hour+= arguments[0];
	var EWO_Element = document.querySelector("#EWO_At_Hour_ID");
	EWO_Element.innerText = EWO_At_Hour;

	console.log("Exiting " + EWO_Caller);
}

function EWO_At_Minute_Decrement_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	EWO_At_Minute-= arguments[0];
	var EWO_Element = document.querySelector("#EWO_At_Minute_ID");
	EWO_Element.innerText = EWO_At_Minute;

	console.log("Exiting " + EWO_Caller);
}

function EWO_At_Minute_Increment_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	EWO_At_Minute+= arguments[0];
	var EWO_Element = document.querySelector("#EWO_At_Minute_ID");
	EWO_Element.innerText = EWO_At_Minute;

	console.log("Exiting " + EWO_Caller);
}

function EWO_At_Month_Decrement_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	EWO_At_Month-= arguments[0];
	var EWO_Element = document.querySelector("#EWO_At_Month_ID");
	EWO_Element.innerText = EWO_At_Month;

	console.log("Exiting " + EWO_Caller);
}

function EWO_At_Month_Increment_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	EWO_At_Month+= arguments[0];
	var EWO_Element = document.querySelector("#EWO_At_Month_ID");
	EWO_Element.innerText = EWO_At_Month;

	console.log("Exiting " + EWO_Caller);
}
