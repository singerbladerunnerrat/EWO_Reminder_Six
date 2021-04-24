"use strict";

function EWO_Build_Output_Function()
{
	"use strict";

	var EWO_Caller = new Error().stack;
	EWO_Caller = EWO_Caller.split("\n")[1].trim();
	EWO_Caller = EWO_Caller.substring(3);
	EWO_Caller = EWO_Caller.substring(0, EWO_Caller.indexOf("(") - 1);

	console.log("Entering " + EWO_Caller + " - " + document.lastModified);

	var EWO_Overdue_HTML = "";
	var EWO_Output_HTML = "";
	var EWO_Saved_HTML = "";

	for (var EWO_For_Counter_One = 0; EWO_For_Counter_One < EWO_Reminder_Six_Array.length; EWO_For_Counter_One++)
	{
		var EWO_HTML = "";
		var EWO_Output = true;

		var EWO_Overdue = EWO_Reminder_Six_Array[EWO_For_Counter_One].EWO_Overdue;

		if (EWO_Overdue)
		{
			EWO_Output = false;
		}

		var EWO_Saved = EWO_Reminder_Six_Array[EWO_For_Counter_One].EWO_Saved;

		if (EWO_Saved)
		{
			EWO_Output = false;
		}

		var EWO_End_Time_In_Milliseconds = EWO_Reminder_Six_Array[EWO_For_Counter_One].EWO_End_Time_In_Milliseconds;
		var EWO_Title_One = EWO_Reminder_Six_Array[EWO_For_Counter_One].EWO_Title_One;
		var EWO_Title_Two = EWO_Reminder_Six_Array[EWO_For_Counter_One].EWO_Title_Two;
		var EWO_Title_Three = EWO_Reminder_Six_Array[EWO_For_Counter_One].EWO_Title_Three;

		// Almost everything will have to be done twice.
		// Once for the end time and then again for the start time.

		// Get the end time in standard Date format for the shit to come.
		var EWO_End_Time = new Date(EWO_Reminder_Six_Array[EWO_For_Counter_One].EWO_End_Time);

		// Get the start time in standard Date format for the shit to come.
		var EWO_Start_Time = new Date(EWO_Reminder_Six_Array[EWO_For_Counter_One].EWO_Start_Time);

		// Check to see if the end time is AM or PM and set the hour and AM/PM variables as required.
		var EWO_End_Time_AM_PM = "";
		var EWO_End_Time_Hours = EWO_End_Time.getHours();

		if (EWO_End_Time_Hours > 12)
		{
			EWO_End_Time_Hours = EWO_End_Time_Hours - 12;
			EWO_End_Time_AM_PM = "PM";
		}
		else
		{
			EWO_End_Time_AM_PM = "AM";
		}

		if (EWO_End_Time_Hours == "0")
		{
			EWO_End_Time_Hours = 12;
		}

		// Check to see if the start time is AM or PM and set the hour and AM/PM variables as required.
		var EWO_Start_Time_AM_PM = "";
		var EWO_Start_Time_Hours = EWO_Start_Time.getHours();

		if (EWO_Start_Time_Hours > 12)
		{
			EWO_Start_Time_Hours = EWO_Start_Time_Hours - 12;
			EWO_Start_Time_AM_PM = "PM";
		}
		else
		{
			EWO_Start_Time_AM_PM = "AM";
		}

		if (EWO_Start_Time_Hours == "0")
		{
			EWO_Start_Time_Hours = 12;
		}

		// This makes sure that minute values of less than ten have a leading zero.
		// For the end time.
		var EWO_End_Time_Minutes = EWO_End_Time.getMinutes();

		if (EWO_End_Time_Minutes < 10)
		{
			EWO_End_Time_Minutes = "0" + EWO_End_Time_Minutes;
		}

		// This makes sure that minute values of less than ten have a leading zero.
		// For the start time.
		var EWO_Start_Time_Minutes = EWO_Start_Time.getMinutes();

		if (EWO_Start_Time_Minutes < 10)
		{
			EWO_Start_Time_Minutes = "0" + EWO_Start_Time_Minutes;
		}

		// This makes sure that second values of less than ten have a leading zero.
		// For the end time.
		var EWO_End_TimeSeconds = EWO_End_Time.getSeconds();

		if (EWO_End_TimeSeconds < 10)
		{
			EWO_End_TimeSeconds = "0" + EWO_End_TimeSeconds;
		}

		// This makes sure that second values of less than ten have a leading zero.
		// For the start time.
		var EWO_Start_TimeSeconds = EWO_Start_Time.getSeconds();

		if (EWO_Start_TimeSeconds < 10)
		{
			EWO_Start_TimeSeconds = "0" + EWO_Start_TimeSeconds;
		}

		// Determine if the current timer is overdue.
		// If it is overdue we will display it differently so the user knows that.
		if (EWO_Saved)
		{
			EWO_Output = false;
			EWO_Overdue = false;
		}
		else
		{
			var EWO_CurrentTime = new Date();

			if (EWO_End_Time_In_Milliseconds < EWO_CurrentTime.getTime())
			{
				if (!EWO_Overdue)
				{

					EWO_Audio_Alarm.play();
					
/*
					// https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
					var EWO_Audio = new Audio("EWO_Alarm_Sound.mp3");
					var EWO_Audio_Promise = EWO_Audio.play();

					if (EWO_Audio_Promise !== undefined)
					{
						EWO_Audio_Promise.then(_ => {
							// Autoplay started!
						}).catch(error => {
							document.alert("Sound hasn't been enabled yet.");
							// Autoplay was prevented.
							// Show a "Play" button so that user can start playback.
						});
					}
*/

					EWO_Overdue = true;
					EWO_Output = false;
				}
			}
			else
			{
				EWO_Overdue = false;
			}
		}

		// Here comes the HTML building nonsense.
		// Buckle up, Dorothy!
		// I've indented this section oddly to keep my sanity while writing the HTML.
			EWO_HTML+= "<table style='margin-left:1em'>";
				EWO_HTML+= "<tbody>";
					EWO_HTML+= "<tr>";
						EWO_HTML+= "<td>Title:</td>";
						EWO_HTML+= "<td>";
							EWO_HTML+= "<span style='margin-left:1em'></span>";
						EWO_HTML+= "</td>";
						EWO_HTML+= "<td>";
		if (EWO_Title_One !== "")
		{
							EWO_HTML+= EWO_Title_One;
		}
		else
		{
							EWO_HTML+= "***";
		}
						EWO_HTML+= "</td>";
						EWO_HTML+= "<td>";
							EWO_HTML+= "--";
						EWO_HTML+= "</td>";
						EWO_HTML+= "<td>";
		if (EWO_Title_Two !== "")
		{
							EWO_HTML+= EWO_Title_Two;
		}
		else
		{
							EWO_HTML+= "***";
		}
						EWO_HTML+= "</td>"
						EWO_HTML+= "<td>"
							EWO_HTML+= "--";
						EWO_HTML+= "</td>"
						EWO_HTML+= "<td>"
		if (EWO_Title_Three !== "")
		{
								EWO_HTML+= EWO_Title_Three;
		}
		else
		{
								EWO_HTML+= "***";
		}
						EWO_HTML+= "</td>"
					EWO_HTML+= "</tr>";
				EWO_HTML+= "</tbody>";
			EWO_HTML+= "</table>";

/*
					EWO_HTML+= "<tr>";
						EWO_HTML+= "<td>Start Time:</td>";
						EWO_HTML+= "<td></td>";
						EWO_HTML+= "<td>";
							EWO_HTML+= EWO_Days_Of_The_Week[EWO_Start_Time.getDay()];
							EWO_HTML+= ", ";
							EWO_HTML+= EWO_Months_Of_The_Year[EWO_Start_Time.getMonth()];
							EWO_HTML+= " ";
							EWO_HTML+= EWO_Start_Time.getDate();
							EWO_HTML+= ", ";
							EWO_HTML+= EWO_Start_Time.getFullYear();
							EWO_HTML+= " ";
							EWO_HTML+= EWO_Start_Time_Hours;
							EWO_HTML+= ":";
							EWO_HTML+= EWO_Start_Time_Minutes;
							EWO_HTML+= ":";
							EWO_HTML+= EWO_Start_TimeSeconds;
							EWO_HTML+= " ";
							EWO_HTML+= EWO_Start_Time_AM_PM;
						EWO_HTML+= "</td>";
					EWO_HTML+= "</tr>";
					EWO_HTML+= "<tr>";
						EWO_HTML+= "<td>End Time:</td>";
						EWO_HTML+= "<td></td>";
						EWO_HTML+= "<td>";
							EWO_HTML+= EWO_Days_Of_The_Week[EWO_End_Time.getDay()];
							EWO_HTML+= ", ";
							EWO_HTML+= EWO_Months_Of_The_Year[EWO_End_Time.getMonth()];
							EWO_HTML+= " ";
							EWO_HTML+= EWO_End_Time.getDate();
							EWO_HTML+= ", ";
							EWO_HTML+= EWO_End_Time.getFullYear();
							EWO_HTML+= " ";
							EWO_HTML+= EWO_End_Time_Hours;
							EWO_HTML+= ":";
							EWO_HTML+= EWO_End_Time_Minutes;
							EWO_HTML+= ":";
							EWO_HTML+= EWO_End_TimeSeconds;
							EWO_HTML+= " ";
							EWO_HTML+= EWO_End_Time_AM_PM;
						EWO_HTML+= "</td>";
					EWO_HTML+= "</tr>";
*/

		if ((!EWO_Overdue) && (!EWO_Saved))
		{
			EWO_HTML+= "<table style='margin-left:1em'>";
				EWO_HTML+= "<tbody>";
			var EWO_Time_Remaining = EWO_End_Time_In_Milliseconds - EWO_CurrentTime.getTime();
					EWO_HTML+= "<tr>";
						EWO_HTML+= "<td>Time Remaining:</td>";

						EWO_HTML+= "<td>";
							EWO_HTML+= "<span style='margin-left:1em'>"
						EWO_HTML+= "</td>";

						EWO_HTML+= "<td>";
			var EWO_Days = Math.floor(EWO_Time_Remaining / (1000 * 60 * 60 * 24));
								EWO_HTML+= EWO_Days;
								EWO_HTML+= " Days";
						EWO_HTML+= "</td>";

						EWO_HTML+= "<td>";
			EWO_Time_Remaining-= EWO_Days * (1000 * 60 * 60 * 24);
			var EWO_Hours = Math.floor(EWO_Time_Remaining / (1000 * 60 * 60));
								EWO_HTML+= EWO_Hours;
								EWO_HTML+= " Hours";
						EWO_HTML+= "</td>";

						EWO_HTML+= "<td>";
			EWO_Time_Remaining-= EWO_Hours * (1000 * 60 * 60);
			var EWO_Minutes = Math.floor(EWO_Time_Remaining / (1000 * 60));
								EWO_HTML+= EWO_Minutes;
								EWO_HTML+= " Minutes";
						EWO_HTML+= "</td>";

/*
			EWO_Time_Remaining-= EWO_Minutes * (1000 * 60);
			var EWO_Seconds = Math.floor(EWO_Time_Remaining / 1000);
								EWO_HTML+= EWO_Seconds;
								EWO_HTML+= " Seconds";
*/

							EWO_HTML+= "</span>"
						EWO_HTML+= "</td>";
					EWO_HTML+= "</tr>";
				EWO_HTML+= "</tbody>";
			EWO_HTML+= "</table>";
		}

			EWO_HTML+= "<table style='margin-left:1em'>";
				EWO_HTML+= "<tbody>";
					EWO_HTML+= "<tr>";
						EWO_HTML+= "<td>";
							EWO_HTML+= "<button type='button' onclick='EWO_Edit_Button_Function(" + EWO_For_Counter_One + ");'>Edit</button>";

							EWO_HTML+= "<span style='margin-left:1em'></span>";
							EWO_HTML+= "<button type='button' onclick='EWO_Restart_Button_Function(" + EWO_For_Counter_One + ");'>Restart</button>";
		if (!EWO_Saved)
		{
							EWO_HTML+= "<span style='margin-left:1em'></span>";
							EWO_HTML+= "<button type='button' onclick='EWO_Save_Button_Function(" + EWO_For_Counter_One + ");'>Save</button>";
		}

							EWO_HTML+= "<span style='margin-left:1em'></span>";
							EWO_HTML+= "<button type='button' onclick='EWO_Delete_Button_Function(" + EWO_For_Counter_One + ");'>Delete</button>";

						EWO_HTML+= "</td>";
					EWO_HTML+= "</tr>";
				EWO_HTML+= "</tbody>";
			EWO_HTML+= "</table>";
			EWO_HTML+= "<br>";

		if (EWO_Output)
		{
			EWO_Output_HTML+= EWO_HTML;
		}

		if (EWO_Overdue)
		{
			EWO_Overdue_HTML+= EWO_HTML;
		}

		if (EWO_Saved)
		{
			EWO_Saved_HTML+= EWO_HTML;
		}

		EWO_Reminder_Six_Array[EWO_For_Counter_One].EWO_Overdue = EWO_Overdue;
		EWO_Reminder_Six_Array[EWO_For_Counter_One].EWO_Saved = EWO_Saved;
	}

	var EWO_Overdue_Element = document.querySelector("#EWO_Overdue_ID");
	if (EWO_Overdue_Element.innerHTML !== EWO_Overdue_HTML)
	{
		EWO_Overdue_Element.innerHTML = EWO_Overdue_HTML;
	}

	var EWO_Output_Element = document.querySelector("#EWO_Output_ID");
	if (EWO_Output_Element.innerHTML !== EWO_Output_HTML)
	{
		EWO_Output_Element.innerHTML = EWO_Output_HTML;
	}

	var EWO_Saved_Element = document.querySelector("#EWO_Saved_ID");
	if (EWO_Saved_Element.innerHTML !== EWO_Saved_HTML)
	{
		EWO_Saved_Element.innerHTML = EWO_Saved_HTML;
	}

	console.log("Exiting " + EWO_Caller);
}
