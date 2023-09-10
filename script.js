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

  // Function to create timeblocks
  function setTimeBlocks() {
    // Utilize day.js feature to implement the hour
    var currentHour = dayjs().hour();

    // Loop through each hour from 9am - 5pm (24 hour time: 9 - 17)
    for (var hour = 9; hour <= 17; hour++) {
      // Initialize time block variable 
      // Per all '.addClass' elements, referred to example HTML code to create elements dynamically 
      var timeBlock = $("<div>").addClass("row time-block");

      // Initialize time label variable per time block
      var timeLabel = $("<div>")
        .addClass("col-2 col-md-1 hour text-center py-3")
        .text(dayjs().hour(hour).format("hA"));

      // Create textarea element for user to enter things to keep tracked
      var enterText = $("<textarea>")
        .addClass("col-8 col-md-10 description")
        .attr("id", "hour-" + hour);

      // Create 'save button' element for saving information entered in textarea
      var save = $("<button>")
        .addClass("btn saveBtn col-2 col-md-1")
        .attr("aria-label", "save")
        .append($("<i>").addClass("fas fa-save").attr("aria-hidden", "true"));

      // Apply logic indicating whether the hour is in the past, present, or future
      if (hour < currentHour) {
        timeBlock.addClass("past");
      } else if (hour === currentHour) {
        timeBlock.addClass("present");
      } else {
        timeBlock.addClass("future");
      }

      // Obtain text stored in local storage (in case user refreshes page)
      //Referred to mdn web docs link for guidance: https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
      var savedText = localStorage.getItem("hour-" + hour);
      // If there's a saved event, populate the textarea with it
      if (savedText) {
        textArea.val(savedText);
      }

      // Append timeLabel, enterText, and save to timeblock
      timeBlock.append(timeLabel, enterText, save);

      // Append timeblock to the container with class "container-lg" from HTML file
      $(".container-lg").append(timeBlock);
    }
  }

  // Call setCurrentDate function
  setCurrentDate();

  // Call the function to create the timeblocks and initialize the page
  setTimeBlocks();

});