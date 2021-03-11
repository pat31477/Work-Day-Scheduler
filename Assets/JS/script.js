// Display current day and date
//let todayDate = moment().format('dddd, MMM Do YYYY, h:mm:ss a');
//$("#currentDay").html(todayDate);

let updateTime = function () {
    let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    $("#currentDay").text(currentTime)
  }

  setInterval(updateTime, 1000);

