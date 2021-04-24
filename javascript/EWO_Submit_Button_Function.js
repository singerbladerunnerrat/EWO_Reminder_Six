"use strict";

function EWO_Submit_Button_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	EWO_Error_Function("");

	var EWO_In = document.querySelector("#EWO_In_ID").checked;
	var EWO_At = document.querySelector("#EWO_At_ID").checked;

	var EWO_Object = {};

	EWO_Object.EWO_Title_One = document.querySelector("#EWO_Title_One_ID").value;
	EWO_Object.EWO_Title_Two = document.querySelector("#EWO_Title_Two_ID").value;

	EWO_Object.EWO_In_Days = EWO_In_Days;
	EWO_Object.EWO_In_Hours = EWO_In_Hours;
	EWO_Object.EWO_In_Minutes = EWO_In_Minutes;
	EWO_Object.EWO_In_Seconds = EWO_In_Seconds;

	if (EWO_In)
	{
		EWO_Object.EWO_Duration = EWO_Object.EWO_In_Days * 24 * 60 * 60 *1000;
		EWO_Object.EWO_Duration = EWO_Object.EWO_Duration + EWO_Object.EWO_In_Hours * 60 * 60 * 1000;
		EWO_Object.EWO_Duration = EWO_Object.EWO_Duration + EWO_Object.EWO_In_Minutes * 60 * 1000;
		EWO_Object.EWO_Duration = EWO_Object.EWO_Duration + EWO_Object.EWO_In_Seconds * 1000;

		if (EWO_Object.EWO_Duration !== 0)
		{
			EWO_Object.EWO_Kind = "in";

			EWO_Object.EWO_Title_Three = "";
			if (EWO_In_Days !== 0)
			{
				EWO_Object.EWO_Title_Three+= EWO_In_Days + " Day";
				if (EWO_In_Days > 1)
				{
					EWO_Object.EWO_Title_Three+= "s";
				}
				EWO_Object.EWO_Title_Three+= " ";
			}

			if (EWO_In_Hours !== 0)
			{
				EWO_Object.EWO_Title_Three+= EWO_In_Hours + " Hour";
				if (EWO_In_Hours > 1)
				{
					EWO_Object.EWO_Title_Three+= "s";
				}
				EWO_Object.EWO_Title_Three+= " ";
			}

			if (EWO_In_Minutes !== 0)
			{
				EWO_Object.EWO_Title_Three+= EWO_In_Minutes + " Minute";
				if (EWO_In_Minutes > 1)
				{
					EWO_Object.EWO_Title_Three+= "s";
				}
				EWO_Object.EWO_Title_Three+= " ";
			}

			if (EWO_In_Seconds !== 0)
			{
				EWO_Object.EWO_Title_Three+= EWO_In_Seconds + " Second";
				if (EWO_In_Seconds > 1)
				{
					EWO_Object.EWO_Title_Three+= "s";
				}
				EWO_Object.EWO_Title_Three+= " ";
			}

			EWO_Object.EWO_Title_Three = EWO_Object.EWO_Title_Three.slice(0, EWO_Object.EWO_Title_Three.length - 1);
			EWO_Object.EWO_Title_Three+= "";

			EWO_Object.EWO_Start_Time = new Date();
			EWO_Object.EWO_Start_Time_In_Milliseconds = EWO_Object.EWO_Start_Time.getTime();
			EWO_Object.EWO_End_Time = new Date(EWO_Object.EWO_Start_Time_In_Milliseconds + EWO_Object.EWO_Duration);
			EWO_Object.EWO_End_Time_In_Milliseconds = EWO_Object.EWO_End_Time.getTime();

			EWO_Reminder_Six_Array.push(EWO_Object);
			EWO_Clear_Form_Function();
			EWO_Sort_Array_Function();
			EWO_Save_Array_Function();
			EWO_Build_Output_Function();
		}
		else
		{
			EWO_Error_Function("Duration can't be 0.");
		}
	}

	if (EWO_At)
	{
		EWO_Error_Function('Reminders for "at" not implemented yet.  Use "in" instead.');

		/*
		EWO_Object.EWO_Kind = "at";
		EWO_Object.EWO_Month = EWO_At_Month;
		EWO_Object.EWO_Day = EWO_At_Day;
		EWO_Object.EWO_Hour = EWO_At_Hour;
		EWO_Object.EWO_Minute = EWO_At_Minute;

		console.log(EWO_Object);

		EWO_Reminder_Six_Array.push(EWO_Object);
		console.log(EWO_Reminder_Six_Array);
		*/
	}

	EWO_Audio_Click.play();

	console.log("Exiting " + EWO_Caller);
}
