// Select all rating buttons
const rateButtons = document.querySelectorAll(".rate");
const message = document.getElementById("message");

// Add click event for each button
rateButtons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    let feedback = "";
    switch (value) {
      case "1":
        feedback = "Sorry to hear that 😔. We'll improve!";
        break;
      case "2":
        feedback = "Thanks for your feedback. We’ll do better.";
        break;
      case "3":
        feedback = "Okay experience 👍. Thanks for sharing!";
        break;
      case "4":
        feedback = "Great! We’re glad you’re happy 😊";
        break;
      case "5":
        feedback = "Awesome! Thanks for loving our service ❤️";
        break;
    }

    message.textContent = feedback;
  });
});
