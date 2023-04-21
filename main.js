const form = document.querySelector(".quiz-form");
const scorePopupWrapper = document.querySelector(".popup-wrapper");
const scorePopup = document.querySelector(".score-popup");

correctAnswers = ["A", "B", "B", "A", "A", "A", "B", "B", "A", "B"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const UserAnswers = [
    form.option1.value,
    form.option2.value,
    form.option3.value,
    form.option4.value,
    form.option5.value,
    form.option6.value,
    form.option7.value,
    form.option8.value,
    form.option9.value,
    form.option10.value,
  ];
  UserAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score = score + 10;
    }
  });

  // show scores

  // for 10%
  if (score === 10) {
    scorePopupWrapper.style.display = "block";
    scorePopup.innerHTML = `<h1 class = "score-quote">Aww, you only got <span class="low-score">${score}%</span>. <br>Try again 🥲</h1> <p class ="subtitle">Click anywhere to continue</p>`;

    // for 20%
  } else if (score === 20) {
    scorePopupWrapper.style.display = "block";
    scorePopup.innerHTML = `<h1 class = "score-quote">You only got <span class="low-core">${score}%</span>. <br>Try again.</h1> <p class ="subtitle">Click anywhere to continue</p>`;

    // for 30%
  } else if (score === 30) {
    scorePopupWrapper.style.display = "block";
    scorePopup.innerHTML = `<h1 class = "score-quote">You got <span class="low-score">${score}%</span>. <br>Give it another shot.</h1> <p class ="subtitle">Click anywhere to continue</p>`;

    // for 40%
  } else if (score === 40) {
    scorePopupWrapper.style.display = "block";
    scorePopup.innerHTML = `<h1 class = "score-quote">Your score is <span class="mid-score">${score}%</span>. <br>Give it another shot.</h1> <p class ="subtitle">Click anywhere to continue</p>`;

    // for 50%
  } else if (score === 50) {
    scorePopupWrapper.style.display = "block";
    scorePopup.innerHTML = `<h1 class = "score-quote">Nice. You score is <span class="mid-score">${score}%</span>. <br>Give it another try</h1> <p class ="subtitle">Click anywhere to continue</p>`;

    // for 60%
  } else if (score === 60) {
    scorePopupWrapper.style.display = "block";
    scorePopup.innerHTML = `<h1 class = "score-quote">Sweet. Your score is <span class="mid-core">${score}%</span>. Kudos</h1> <p class ="subtitle">Click anywhere to continue</p>`;

    // for 70%
  } else if (score === 70) {
    scorePopupWrapper.style.display = "block";
    scorePopup.innerHTML = `<h1 class = "score-quote">Way to go! <br>Your score is <span class="high-score">${score}%</span>. 💪🏽💪🏽</h1> <p class ="subtitle">Click anywhere to continue</p>`;

    // for 80%
  } else if (score === 80) {
    scorePopupWrapper.style.display = "block";
    scorePopup.innerHTML = `<h1 class = "score-quote">AWESOME. You got <span class="high-score">${score}%</span>. 👏🏾👏🏾</h1> <p class ="subtitle">Click anywhere to continue</p>`;

    // for 90%
  } else if (score === 90) {
    scorePopupWrapper.style.display = "block";
    scorePopup.innerHTML = `<h1 class = "score-quote">AMAZING!. You got <span class="high-score">${score}%</span>. ✨✨</h1> <p class ="subtitle">Click anywhere to continue</p>`;

    //for 100%
  } else if (score === 100) {
    scorePopupWrapper.style.display = "block";
    scorePopup.innerHTML = `<h1 class = "score-quote">GENIUS. <br>Your got <span class="full-score">${score}%</span>. 🎉🎉</h1> <p class ="subtitle">Click anywhere to continue</p>`;

    // for 0%
  } else {
    scorePopupWrapper.style.display = "block";
    scorePopup.innerHTML = `<h1 class = "score-quote">Oops. You got <span class="zero-score">${score}%</span>.<br>Better luck next time 🥲</h1> <p class ="subtitle">Click anywhere to continue</p>`;
  }

  // close popup
  scorePopupWrapper.addEventListener("click", (e) => {
    scorePopupWrapper.style.display = "none";
    clearAnswers();
  });
});

// clear answers
function clearAnswers() {
  let selectedAnswers = document.getElementsByTagName("input");
  for (let i = 0; i < selectedAnswers.length; i++) {
    selectedAnswers[i].checked = false;
  }
}
