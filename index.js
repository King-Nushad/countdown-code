
function countdown() {
  let count = 50;
  let countdownInterval = setInterval(function() {
    if (count === 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "Countdown Complete";
    } else {
      document.getElementById("countdown").innerHTML = count;
      count--;
    }
  }, 1000);
}
countdown()


