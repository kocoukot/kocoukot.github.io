const aims_list = ["штуки", "работающие решения", "ценности"];

const typingDelay = 50; // Задержка между печатанием букв (в миллисекундах)
const erasingDelay = 50; // Задержка между стиранием букв (в миллисекундах)
const newTextDelay = 1500; // Задержка перед началом печатания нового слова (в миллисекундах)
let textIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const textElement = document.querySelector(".js-typing");

const currentText = () => aims_list[textIndex];

const welcome_section = function () {
    if (aims_list.length) {
      setTimeout(type, newTextDelay);
    }
};

const type = () => {
  if (letterIndex < currentText().length) {
    textElement.textContent += currentText().charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
};

const erase = () => {
  if (letterIndex > 0) {
    textElement.textContent = currentText().substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    isDeleting = false;
    textIndex = (textIndex + 1) % aims_list.length;
    setTimeout(type, typingDelay);
  }
};

export default welcome_section;
