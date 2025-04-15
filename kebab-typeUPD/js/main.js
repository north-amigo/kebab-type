"use strict";

import {
  russianTexts20,
  englishTexts20,
  russianEnglishTexts20,
  russianTexts40,
  englishTexts40,
  russianEnglishTexts40,
  russianTexts60,
  englishTexts60,
  russianEnglishTexts60,
} from "./constants.js";

import {
  russianRadio,
  englishRadio,
  russianEnglishRadio,
  words20Radio,
  words40Radio,
  words60Radio,
} from "./constants.js";

import {
  simulator,
  text,
  generateButton,
  restartButton,
  focusError,
  mistakesCounterSpan,
  mistakesCounterDiv,
  amountWords,
} from "./constants.js";

function newTextGenerate(textsArray) {
  if (russianRadio.checked) {
    if (words20Radio.checked) {
      textsArray = russianTexts20;
    }
    if (words40Radio.checked) {
      textsArray = russianTexts40;
    }
    if (words60Radio.checked) {
      textsArray = russianTexts60;
    }
  } else if (englishRadio.checked) {
    if (words20Radio.checked) {
      textsArray = englishTexts20;
    }
    if (words40Radio.checked) {
      textsArray = englishTexts40;
    }
    if (words60Radio.checked) {
      textsArray = englishTexts60;
    }
  } else if (russianEnglishRadio.checked) {
    if (words20Radio.checked) {
      textsArray = russianEnglishTexts20;
    }
    if (words40Radio.checked) {
      textsArray = russianEnglishTexts40;
    }
    if (words60Radio.checked) {
      textsArray = russianEnglishTexts60;
    }
  }

  const maxRandom = textsArray.length;
  const randomIndex = Math.floor(Math.random() * maxRandom);
  return textsArray[randomIndex];
}

function formatWord(word) {
  return `<span class="letter">${word
    .split("")
    .join('</span><span class="letter">')}</span>`;
}

let mistakesCounter = 0;
window.currentText = "";

generateButton.addEventListener("click", function () {
  mistakesCounter = 0;
  mistakesCounterSpan.innerText = 0;
  mistakesCounterDiv.style.display = "block";
  mistakesCounterSpan.style.color = "#00ff37";

  let newText = newTextGenerate();
  if (newText !== currentText) {
    text.innerHTML = "";
    const wordsText = newText.split("");
    for (let word of wordsText) {
      text.innerHTML += formatWord(word);
    }
    window.currentText = newText;
  } else {
    while (window.currentText == newText) {
      newText = newTextGenerate();
    }
    text.innerHTML = "";
    const wordsText = newText.split("");
    for (let word of wordsText) {
      text.innerHTML += formatWord(word);
    }
    window.currentText = newText;
  }

  if (
    russianTexts40.includes(newText) ||
    englishTexts40.includes(newText) ||
    russianEnglishTexts40.includes(newText)
  ) {
    amountWords.innerText = 6;
  } else if (
    russianTexts60.includes(newText) ||
    englishTexts60.includes(newText) ||
    russianEnglishTexts60.includes(newText)
  ) {
    amountWords.innerText = 9;
  } else if (
    russianTexts20.includes(newText) ||
    englishTexts20.includes(newText) ||
    russianEnglishTexts20.includes(newText)
  ) {
    amountWords.innerText = 3;
  }

  document.querySelector(".letter").classList.add("current");
  focusError.style.display = "block";
});

document
  .querySelector(".simulator")
  .addEventListener("keydown", function (event) {
    const key = event.key;
    let currentLetter = document.querySelector(".letter.current");
    const expected = currentLetter.innerText;
    const isLetter = key.length === 1;
    const isBackspace = key === "Backspace";

    if (isLetter) {
      if (currentLetter.innerText !== " ") {
        if (key === expected) {
          currentLetter.classList.add("correct");
        } else {
          currentLetter.classList.add("incorrect");
          mistakesCounter += 1;
        }
      } else {
        if (key !== expected) {
          currentLetter.classList.add("spaceIncorrect");
          mistakesCounter += 1;
        }
      }
      currentLetter.classList.remove("current");
      currentLetter.nextSibling.classList.add("current");
    }

    if (isBackspace) {
      currentLetter.classList.remove("current");
      currentLetter = currentLetter.previousSibling;
      currentLetter.classList.add("current");
      currentLetter.classList.remove(
        "correct",
        "incorrect",
        "spaceCorrect",
        "spaceIncorrect"
      );
    }

    mistakesCounterSpan.innerText = mistakesCounter;
    if (mistakesCounterSpan.innerText - amountWords.innerText === 1) {
      mistakesCounterSpan.style.color = "#f55";
    }
  });

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
  }
});
