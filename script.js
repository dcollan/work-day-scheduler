// Makes sure function is ready once document is run
// Referred to W3 schools source: https://www.w3schools.com/jquery/event_ready.asp
$(document).ready(function () {

  // Function to set the current date
  function setCurrentDate() {
    // Utilize day.js feature to implement the date
    var currentDate = dayjs().format("dddd, MMMM D, YYYY");
    // Use 'currentDay' ID element to display the date
    $("#currentDay").text(currentDate);
  }

  // Function to set timeblocks
  function setTimeBlocks() {
    // Utilize day.js feature to implement the hour
    var currentHour = dayjs().hour();

    // Loop through each hour from 9am - 5pm (24 hour time: 9 - 17)
    for (var hour = 9; hour <= 17; hour++) {
      // Initialize time block variable. Referred to example HTML code to create elements dynamically 
      var timeBlock = $("<div>").addClass("row time-block");

      // Initialize time label variable per time block
      var timeLabel = $("<div>")
        .addClass("col-2 col-md-1 hour text-center py-3")
        .text(dayjs().hour(hour).format("hA"));
    }
  }

  // Call setCurrentDate function
  setCurrentDate();

  // Call the function to create the timeblocks and initialize the page
  setTimeBlocks();

});