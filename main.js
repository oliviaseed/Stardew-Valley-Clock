function Time() {
    // Creating object of the Date class
    var date = new Date();
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // Get current second
    var second = date.getSeconds();
    // Variable to store AM / PM
    var period = "";
    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
    period = "pm";
    } else {
    period = "am";
    }
    // Converting the hour in 12-hour format
    if (hour == 0) {
    hour = 12;
    } else {
    if (hour > 12) {
    hour = hour - 12;
    }
    }
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // Adding time elements to the div
    // Can add seconds here which will update and tick but i don't want to
    document.getElementById("clock").innerText = hour + " : " + minute + " " + period;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
   }
    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10
   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
        return t;
        }
       }
Time();

function DayofWeek(){
    var date = new Date();
    
    var dayofWeek = "";
    var weekDayNum = date.getDay();
    if (weekDayNum == 0){
        dayofWeek = "Sunday";
    }
    else if (weekDayNum == 1){
        dayofWeek = "Monday";
    }
    else if (weekDayNum == 2){
        dayofWeek = "Tuesday";
    }
    else if (weekDayNum == 3){
        dayofWeek = "Wednesday";
    }
    else if (weekDayNum == 4){
        dayofWeek = "Thursday";
    }
    else if (weekDayNum == 5){
        dayofWeek = "Friday";
    }
    else{
        dayofWeek = "Saturday";
    }
    document.getElementById("dayofweek").innerText = dayofWeek;
}
DayofWeek();

function TheDate(){
    var date = new Date();

    var month = "";
    var monthNum = date.getMonth();
    if (monthNum == 0){
        month = "January";
    }
    else if (monthNum == 1){
        month = "February";
    }
    else if (monthNum == 2){
        month = "March";
    }
    else if (monthNum == 3){
        month = "April";
    }
    else if (monthNum == 4){
        month = "May";
    }
    else if (monthNum == 5){
        month = "June";
    }
    else if (monthNum == 6){
        month = "July";
    }
    else if (monthNum == 7){
        month = "August";
    }
    else if (monthNum == 8){
        month = "September";
    }
    else if (monthNum == 9){
        month = "October";
    }
    else if (monthNum == 10){
        month = "November";
    }
    else{
        month = "December";
    }

    var dayNum = date.getDate();
    var daySuffix = "";
    if (dayNum == (1||21||31)){
        daySuffix = "st";
    }
    else if (dayNum == (2||22)){
        daySuffix = "nd";
    }
    else if (dayNum == (3||23)){
        daySuffix = "rd";
    }
    else{
        daySuffix = "th";
    }

    document.getElementById("date").innerText = month + " " + dayNum +daySuffix;

}
TheDate();