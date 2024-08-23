document.addEventListener("DOMContentLoaded", function() {
  // Const variables
  const mainBtn = document.getElementById("main-btn");
  const questionEl = document.getElementById("question");
  const answerEl = document.getElementById("answer");
  const incorrectEl = document.getElementById("incorrect");
  const correctEl = document.getElementById("correct");
  const progressEl = document.getElementById("progress");
  const snowEl = document.getElementById("snow");
  const modal = document.getElementById("my-modal");
  const modalText = document.getElementById("modal-text")
  const span = document.getElementsByClassName("close")[0];
  const SCORE_LEVEL_UP = 60;

  // Arrays
  const positiveMessages = [
    "Great Job!",
    "Well Done!",
    "Keep it up!",
    "Nice Work!",
    "Fantastic!",
    "You Rock!",
    "Awesome!",
    "Excellent!",
    "Superb!",
    "Impressive!",
    "Way to go!",
    "Brilliant!",
    "Outstanding!",
    "Terrific!",
    "Good Job!",
    "Marvelous!",
    "Spectacular!",
    "Wonderful!",
    "Top Notch!",
    "Super!"
  ];

  const incorrectMessages = [
    "Keep pushing forward!",
    "You're making progress!",
    "Stay positive!",
    "Keep striving!",
    "Stay resilient!",
    "Don't stop now!",
    "You've got this!",
    "Embrace challenges!",
    "You're awesome!",
    "Believe in yourself!"
  ];

  // Prompts
  const welcomePrompt = `Parker Math is a dynamic math operations game that automatically adjusts to your skill level as you play. The questions will adapt to your performance—correct answers will bring more challenging problems, while incorrect ones will make the problems easier. Your journey begins with addition and advances through subtraction, multiplication, and, finally division. The game is designed not to save your progress, allowing you to revisit concepts and reinforce your learning. Along the way, you'll also earn "Snow" for correct answers, which you can use to open up packs of collectible penguin cards in the shop. Try to collect them all, and good luck on your journey!`;

  const fiveIncorrectPrompt = "It looks like you have gotten five problems incorrect in a row. First of all, good job. You are currently pushing yourself, and you keep showing up even in the face of difficulty. The game should go back to some more manageable problems for you to practice, but take a look at the learn section and review the operation you are on. Do additional research if necessary, or ask a friend or teacher for help. Don't be afraid to ask questions or seek out help. This is how you learn, and you're doing a great job. Keep it up.";

  const tenIncorrectPrompt = "It looks like you have gotten ten problems incorrect in a row. First of all, outstanding job. You are really pushing yourself, and you keep showing up even in the face of tremendous difficulty. Be sure to take a look at the learn section and review the operation you are on. Do additional research if necessary, or ask a friend or teacher for help. Review the concepts and do a little bit of practice on your own. Once you've done this, return to your open tab and continue playing. Remember you learn far more when you lose than when you win, so if you see others around you getting problems correct, don't get upset. Odds are that you are learning more than they are, and they should be envious of you. Keep going. I believe in you and have confidence in yourself."

  const endPrompt = "Congratulations! You've completed an entire game of Parker Math, and this is an accomplishment you should be most proud of. No matter what your skill level was, you had to work hard and struggle along the way to get to this point. To those who didn't get many questions incorrect, I congratulate you, and I'm blessed you've taken the time to play this game. To those who struggled and failed repeatedly to complete the game, I want to give you special congratulations. You learned the most, which should make the people around you jealous, and you should be overjoyed with yourself. You kept getting knocked down and got up with a smile. You showed a growth mindset and welcomed the failure you faced. Great job, and I hope to see you here again soon.";

  displayModal(welcomePrompt);

  // Let variables
  let operations = ["addition", "subtraction", "multiplication", "division"];
  let levelUpPrompts = [false, false, false];
  let operationIndex = 0;
  let difficultyLevel = 1;
  let score = 0;
  let snow = 0;
  let correct = 0;
  let correctStreak = 0;
  let correctSavingsAccount = 0;
  let incorrect = 0;
  let incorrectStreak = 0;
  let progress = 0;
  let currentQuestion = null;
  let correctAnswer = null;
  let shownPrompt = false;

  // Feedback function
  function displayFeedback(text, color, question, answer) {
    mainBtn.textContent = text;
    mainBtn.style.backgroundColor = color;
    if (color !== "#f44335") {
      setTimeout(function() {
        mainBtn.textContent = "Check Answer";
        mainBtn.style.backgroundColor = "#007bff";
      }, 2500);
    } else {
      setTimeout(function() {
        const incorrectMessage = incorrectMessages[Math.floor(Math.random() * incorrectMessages.length)];
        mainBtn.textContent = `${incorrectMessage}`;
      }, 2000);
      setTimeout(function() {
        mainBtn.textContent = `${question} ${answer}`;
      }, 5000);
      setTimeout(function() {
        mainBtn.textContent = "Check Answer";
        mainBtn.style.backgroundColor = "#007bff";
      }, 8000);
    }
  }

  // Pop effect function
  function triggerPopEffect(isCorrect) {
    // Determine the correct element
    const elementId = isCorrect ? 'correct' : 'incorrect';
    const element = document.getElementById(elementId);
  
    // Add the pop-effect class
    element.classList.add('pop-effect');
  
    // Remove the pop-effect class after the animation completes
    element.addEventListener('animationend', () => {
      element.classList.remove('pop-effect');
    });
  }

  // When the user clicks on (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Show modal function
  function displayModal(text) {
    modal.style.display = "flex";
    span.style.display = "none";
    modalText.textContent = text;
    setTimeout(function() {
      span.style.display = "block";
    }, 2500);
  }

  // Generate question function
  function generateQuestion(operation, difficultyLevel) {
    if (operation === "addition") {
      const n1 = Math.floor(Math.random() * (10 * difficultyLevel) + 1);
      const n2 = Math.floor(Math.random() * (10 * difficultyLevel) + 1);
      const answer = n1 + n2;
      const question = `${n1} + ${n2} = `;
      return [question, answer];
    } else if (operation === "subtraction") {
      let n1 = Math.floor(Math.random() * (20 * difficultyLevel) + 1);
      let n2 = Math.floor(Math.random() * (20 * difficultyLevel) + 1);
      [n1, n2] = [Math.max(n1, n2), Math.min(n1, n2)];
      const answer = n1 - n2;
      const question = `${n1} - ${n2} = `;
      return [question, answer];
    } else if (operation === "multiplication") {
      const n1 = Math.floor(Math.random() * (5 * difficultyLevel) + 1);
      const n2 = Math.floor(Math.random() * (5 * difficultyLevel) + 1);
      const answer = n1 * n2;
      const question = `${n1} x ${n2} = `;
      return [question, answer];
    } else if (operation === "division") {
      const n2 = Math.floor(Math.random() * (5 * difficultyLevel) + 1);
      const answer = Math.floor(Math.random() * (5 * difficultyLevel) + 1);
      const n1 = n2 * answer;
      const question = `${n1} / ${n2} = `;
      return [question, answer];
    }
  }
  
  // Start game function
  function startGame() {
    if (operationIndex < operations.length) {
      if (shownPrompt === false) {
        modal.style.display = "flex";
        shownPrompt = true;
      } else if (levelUpPrompts[operationIndex - 1] === false) {
        let levelUpPrompt = `Congratulations! You've shown mastery in ${operations[operationIndex - 1]}, and you should be incredibly proud of your accomplishment. Your dedication and determination have paid off. Now, take a moment to reflect on your journey so far. Consider the problems you struggled with, and then think about the moments when you successfully solved a problem. Did you learn anything from those moments of success? Most likely not, because you already knew the answer. Your previous mistakes and failures led you to be able to answer a problem correctly. As you continue forward, keep in mind that it's through failure that you learn, and success simply confirms that you've learned something.`;
        levelUpPrompts[operationIndex - 1] = true;
        displayModal(levelUpPrompt);
      } else {
        modal.style.display = "none";
      }
      nextQuestion();
    } else {
      questionEl.textContent = "You have completed all operations! Excellent work!";
      mainBtn.style.display = "none";
      answerEl.style.display = "none";
      displayModal(endPrompt);

      // Stop saving game state when game ends
      // clearInterval(saveInterval); 
    }
  }
  
  // Next question function
  function nextQuestion() {
    const savedQuestion = sessionStorage.getItem("currentQuestion");
    const savedAnswer = sessionStorage.getItem("correctAnswer");
    if (savedQuestion && savedAnswer) {
      currentQuestion = savedQuestion;
      correctAnswer = parseFloat(savedAnswer);
      questionEl.textContent = currentQuestion;
      answerEl.value = '';
      return;
    }

    const [question, answer] = generateQuestion(operations[operationIndex], difficultyLevel);
    currentQuestion = question;
    correctAnswer = answer;
    questionEl.textContent = question;
    answerEl.value = '';
  }
  
  // Incorrect answer function
  function incorrectAnswer() {
    correctStreak = 0;
    incorrect++;
    incorrectStreak++;
    triggerPopEffect(false);
    if (incorrectStreak === 5) {
      displayModal(fiveIncorrectPrompt);
    } else if (incorrectStreak === 10) {
      displayModal(tenIncorrectPrompt);
    }
  }

  // Check answer function
  function checkAnswer() {
    if (mainBtn.textContent === "Check Answer") {
      const userAnswer = parseFloat(answerEl.value);
      if (!isNaN(userAnswer)) {
        if (userAnswer === correctAnswer) {
          score++;
          correct++;
          correctSavingsAccount++;
          readyToCompound = true;
          correctStreak++;
          snow += 10;
          incorrectStreak = 0;
          triggerPopEffect(true);
          if (correctStreak % 5 === 0) {
            displayFeedback(`${correctStreak} In A Row!`, "#ffb121");
          } else {
            const randomMessage = positiveMessages[Math.floor(Math.random() * positiveMessages.length)];
            displayFeedback(`Correct. ${randomMessage}`, "#4caf50");
          }
          if (score % 12 === 0) {
            difficultyLevel++;
          }
        } else {
          if (score > 0) {
            score--;
          }
          incorrectAnswer()
          prevQuestion = currentQuestion;
          prevAnswer = correctAnswer;
          displayFeedback("Incorrect.", "#f44335", prevQuestion, prevAnswer); 
          if (score >= 0 && score % 12 === 11) {
            difficultyLevel--;
          }
        }
      } else {
        if (score > 0) {
          score--;
        }
        incorrectAnswer();
        displayFeedback("Invalid Input!", "#f44336");
        if (score >= 0 && score % 10 === 9) {
          difficultyLevel--;
        }
      }
      // Clear the session storage
      sessionStorage.removeItem("currentQuestion");
      sessionStorage.removeItem("correctAnswer");
    
      // Check if score reaches the level up threshold
      if (score >= SCORE_LEVEL_UP) {
        operationIndex++;
        difficultyLevel = 1;
        score = 0;
        startGame();
      } else {
        nextQuestion();
      }
    } else {
      return;
    }
    updateScoreUI();
  }
  
  
  // Function to save game state to sessionStorage
  function saveGameState() {
    sessionStorage.setItem("gameState", JSON.stringify({
      operationIndex: operationIndex,
      difficultyLevel: difficultyLevel,
      score: score,
      correct: correct,
      correctSavingsAccount: correctSavingsAccount,
      incorrect: incorrect,
      progress: progress,
      shownPrompt: shownPrompt,
      correctStreak: correctStreak,
      incorrectStreak: incorrectStreak,
      levelUpPrompts: levelUpPrompts,
      snow: snow,
    }));
    sessionStorage.setItem("currentQuestion", currentQuestion);
    sessionStorage.setItem("correctAnswer", correctAnswer);
  }
  
  // Function to load game state from sessionStorage
  function loadGameState() {
    const gameState = JSON.parse(sessionStorage.getItem("gameState"));
    if (gameState) {
      operationIndex = gameState.operationIndex;
      difficultyLevel = gameState.difficultyLevel;
      score = gameState.score;
      correct = gameState.correct;
      correctSavingsAccount = gameState.correctSavingsAccount;
      incorrect = gameState.incorrect;
      progress = gameState.progress;
      shownPrompt = gameState.shownPrompt;
      correctStreak = gameState.correctStreak;
      incorrectStreak = gameState.incorrectStreak;
      levelUpPrompts = gameState.levelUpPrompts;
      snow = gameState.snow;
    }
    
    const savedQuestion = sessionStorage.getItem("currentQuestion");
    const savedAnswer = sessionStorage.getItem("correctAnswer");
    if (savedQuestion && savedAnswer) {
      currentQuestion = savedQuestion;
      correctAnswer = parseFloat(savedAnswer);
      questionEl.textContent = currentQuestion;
      answerEl.value = '';
    }

    correctEl.textContent = `:${correct}`;
    incorrectEl.textContent = `Incorrect: ${incorrect}`;
    progressEl.textContent = `Progress: ${progress}%`;
    snowEl.textContent = snow;
  }
  
  // Load game state from sessionStorage at the beginning
  loadGameState();
  
  // Save game state to sessionStorage every 500 milliseconds
  function updateScoreUI() {
    correctEl.textContent = correct;
    incorrectEl.textContent = incorrect;
    progress = Math.floor(((score / 240) + (operationIndex * .25)) * 100);
    progressEl.textContent = `Progress: ${progress}%`;
    snowEl.textContent = snow;
  }
  const saveInterval = setInterval(saveGameState, 500);
  
  // Event listeners
  mainBtn.addEventListener("click", checkAnswer);
  
  document.addEventListener("keypress", e => {
    if (e.code === "Enter") {
      e.preventDefault();
      checkAnswer();
    }
  });

  startGame();
  updateScoreUI();
});