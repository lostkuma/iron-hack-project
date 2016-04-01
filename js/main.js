// get current date and time
var month;

function startTime() {
	var currentDate = new Date();
	var hour = currentDate.getHours();
	var minute = currentDate.getMinutes();
	var second = currentDate.getSeconds();
	minute = checkSecMin(minute);
	second = checkSecMin(second);
	var am_or_pm;
	if (hour < 12) {
		am_or_pm = "am";
	} else if (hour == 12) {
		am_or_pm = "pm";
	} else if (hour > 12) {
		hour -= 12;
		am_or_pm = "pm";
	}
	var current_time = hour + ":" + minute + ":" + second + am_or_pm;
	document.getElementById("current-date").innerHTML = getCurrentDate() + " " + current_time;
	var t = setTimeout(startTime, 500);


	function getCurrentDate() {
		var days = ['Sunday','Monday','Tueday','Wednesday','Thursday','Friday','Satday'];
		var day = currentDate.getDate();
		month = currentDate.getMonth() + 1;
		var year = currentDate.getFullYear();
		var day_of_week = days[currentDate.getDay()];

		var current_date = month + "/" + day + "/" + year;
		var display_date = day_of_week + ", " + current_date + ", ";
		return display_date;
	}
}

function checkSecMin(i) {
	if (i < 10) {
		i = "0" + i
	}
return i;
}

// get list of seasonal veggies for this month
function seasonalVeggies() {
	var seasonal_veggies = []
	var veggies = VEGGIES;
	for (var key in veggies) {
		var seasons_of_veggie;
		seasons_of_veggie = veggies[key];
		for (var i = 0; i < seasons_of_veggie.length; i++) {
			if (seasons_of_veggie[i] == month) {
				seasonal_veggies.push(key.replace(/_/, " "));
			}
		}
	}
	document.getElementById("seasonal-veggies").innerHTML = seasonal_veggies.join("<br>");
}


startTime();
seasonalVeggies();

