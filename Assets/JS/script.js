window.onload = function(){
    colorCode();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
   }
  
  // WHEN I open the planner
  // THEN the current day and time is displayed at the top of the calendar
  let updateTime = function () {
    let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss A")
    $("#currentDay").text(currentTime)
  }
  
  setInterval(updateTime, 1000);
  
  // WHEN I scroll down
  // THEN I am presented with timeblocks for standard business hours
  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past (gray), present (red), or future (green)
  
  let now = new Date().getHours();
  
  function colorCode() {
    if (now > 9) {
      $("#comment9am").addClass("past");
    } else if (now >= 9 && now < 10) {
      $("#comment9am").addClass("present");
    } else if (now < 9) {
      $("#comment9am").addClass("future");
    }
    if (now > 10) {
      $("#comment10am").addClass("past");
    } else if (now >= 10 && now < 11) {
      $("#comment10am").addClass("present");
    } else if (now < 10) {
      $("#comment10am").addClass("future");
    }
    if (now > 11) {
      $("#comment11am").addClass("past");
    } else if (now >= 11 && now < 12) {
      $("#comment11am").addClass("present");
    } else if (now < 11) {
      $("#comment11am").addClass("future");
    }
    if (now > 12) {
      $("#comment12pm").addClass("past");
    } else if (now >= 12 && now < 13) {
      $("#comment12pm").addClass("present");
    } else if (now < 12) {
      $("#comment12pm").addClass("future");
    }
    if (now > 13) {
      $("#comment1pm").addClass("past");
    } else if (now >= 13 && now < 14) {
      $("#comment1pm").addClass("present");
    } else if (now < 13) {
      $("#comment1pm").addClass("future");
    }
    if (now > 14) {
      $("#comment2pm").addClass("past");
    } else if (now >= 14 && now < 15) {
      $("#comment2pm").addClass("present");
    } else if (now < 14) {
      $("#comment2pm").addClass("future");
    }
    if (now > 15) {
      $("#comment3pm").addClass("past");
    } else if (now >= 15 && now < 16) {
      $("#comment3pm").addClass("present");
    } else if (now < 15) {
      $("#comment3pm").addClass("future");
    }
    if (now > 16) {
      $("#comment4pm").addClass("past");
    } else if (now >= 16 && now < 17) {
      $("#comment4pm").addClass("present");
    } else if (now < 16) {
      $("#comment4pm").addClass("future");
    }
    if (now > 17) {
      $("#comment5pm").addClass("past");
    } else if (now >= 17 && now < 18) {
      $("#comment5pm").addClass("present");
    } else if (now < 17) {
      $("#comment5pm").addClass("future");
    }
  }
  