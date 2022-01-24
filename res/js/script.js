//simple check for mobile
//TODO: make more reliable function
if(window.innerWidth < window.innerHeight) {
	document.write('<link rel="stylesheet" href="res/css/mobile.css" class="style">');
}
else {
	document.write('<link rel="stylesheet" href="res/css/styles.css" class="style">');
}

$(window).on("load", function() {

	var month_name = [
		"JAN", "FEB", "MAR",
		"APR", "MAY", "JUN",
		"JUL", "AUG", "SEP",
		"OCT", "NOV", "DEC"
	];

	function showTime() {
		var d = new Date();
		var hh = d.getHours();
		var mm = d.getMinutes();
		var date = d.getDate();
		var month = d.getMonth();
		var year = d.getFullYear();
		var meridiem = "AM";

		if(hh == 0) {
			hh = 12;
		}
		if(hh > 12) {
			hh -= 12;
			meridiem = "PM";
		}

		hh = (hh < 10) ? "0" + hh : hh;
		mm = (mm < 10) ? "0" + mm : mm;
		month = month_name[month];

		time = meridiem + " " + hh + ":" + mm + "<br />" + month + ". " + date + " " + year;
		$("#clock").html(time);

		setTimeout(showTime, 1000);
	}

	showTime();

	$("#load_screen").addClass("loadscreen_hidden");
});
