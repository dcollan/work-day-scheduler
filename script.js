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
  // Call setCurrentDate function
  setCurrentDate();
});