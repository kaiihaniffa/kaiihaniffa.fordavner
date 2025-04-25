const targetDate = new Date("May 07, 2025 00:00:00").getTime();
const timerElement = document.getElementById("timer");
const titleElement = document.getElementById("title");

let countdownFinished = false;

function updateTimer() {
  console.log("Timer is running...");  // Debugging: Log when the function starts
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Show the countdown with time
   document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    setTimeout(updateTimer, 1000);
  } else {
    if (!countdownFinished) {
      countdownFinished = true;
      startFinalCountdown();
    }
  }
}

function startFinalCountdown() {
  let secondsLeft = 3; // Start from 3 seconds

  // Update the title to countdown from 3 to 1
  const countdownInterval = setInterval(() => {
    titleElement.textContent = `${secondsLeft}...`;
    secondsLeft--;

    if (secondsLeft < 0) {
      clearInterval(countdownInterval); // Stop the countdown
      document.body.classList.add("hearts-background");  // This will trigger the photo background
      titleElement.textContent = "💖 Happy One Year Anniversary 💖";
	  document.getElementById("next-page-button").style.display = "inline-block"; // Show button
      timerElement.textContent = "";

      // Redirect after 3 seconds
      setTimeout(() => {
        window.location.href = "flipbook.html";
      }, 3000);  // Adjust this delay as needed (3 seconds)
    }
  }, 1000);  // 1-second interval
}

updateTimer();

