"use strict";

function EWO_Sort_Array_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	if (!(EWO_Reminder_Six_Array.length === null))
	{
		var EWO_Object_One = {};
		var EWO_Object_Two = {};

		var EWO_Boolean = true;

		while (EWO_Boolean)
		{
			EWO_Boolean = false;
			for (var EWO_For_Counter_One = 0; EWO_For_Counter_One < (EWO_Reminder_Six_Array.length - 1); EWO_For_Counter_One++)
			{
				EWO_Object_One = EWO_Reminder_Six_Array[EWO_For_Counter_One];
				EWO_Object_Two = EWO_Reminder_Six_Array[EWO_For_Counter_One + 1];

				if (EWO_Object_One.EWO_End_Time_In_Milliseconds > EWO_Object_Two.EWO_End_Time_In_Milliseconds)
				{
					EWO_Boolean = true;

					var EWO_Reminder_Six_Array_One = EWO_Reminder_Six_Array[EWO_For_Counter_One];

					EWO_Reminder_Six_Array[EWO_For_Counter_One] = EWO_Reminder_Six_Array[EWO_For_Counter_One + 1];
					EWO_Reminder_Six_Array[EWO_For_Counter_One + 1] = EWO_Reminder_Six_Array_One;
				}
			}
		}
	}

	console.log("Exiting " + EWO_Caller);
}
