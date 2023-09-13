function displayTime() {
  var dateTime = new Date();
  var hrs = dataTime.getHours();
  var mins = dataTime.getMinutes();
  var sec = dataTime.getSeconds();
  var session = document.getElementById("session");

  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("seconds").innerHTML = sec;
}

setInterval(displayTime, 1000);
