import { personData } from "../mock/person1";
import { personData2 } from "../mock/person2";
import { loadPerson } from "./utils";

const btn = document.querySelector("#switch");
const person1 = "Karthik SR";
const person2 = "Graham Hunt";

let person = person1;
btn.textContent = person2;
loadPerson(personData);

const printBtn = document.querySelector("#print-button");

const exp = document.querySelector("#experience");
const tools = document.querySelector("#tools");
const edu = document.querySelector("#education");
const interests = document.querySelector("#interests");
const email = document.querySelector("#email");

printBtn.addEventListener("click", () => {
  window.print();
});

btn.addEventListener("click", () => {
  if (person === person2) {
    btn.textContent = person2;

    exp.style.order = 4;
    tools.style.order = 5;
    edu.style.order = 6;
    interests.style.order = 7;
    email.style.order = 8;

    loadPerson(personData);
    loadContent();
    person = person1;
  } else {
    btn.textContent = person1;

    edu.style.order = 4;
    interests.style.order = 5;
    email.style.order = 6;
    tools.style.order = 7;
    exp.style.order = 8;

    loadPerson(personData2);
    loadContent();
    person = person2;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const editableElements = document.querySelectorAll(".editable");

  editableElements.forEach((element) => {
    element.addEventListener("dblclick", () => {
      element.contentEditable = true;
      element.classList.add("editing");
      element.focus();
    });

    element.addEventListener("blur", () => {
      element.contentEditable = false;
      element.classList.remove("editing");
      saveContent(element.id, element.innerText);
    });

    element.addEventListener("click", function (e) {
      createRipple(e, element);
    });
  });

  loadContent();
});

function saveContent(id, content) {
  localStorage.setItem(id, content);
}

function loadContent() {
  const editableElements = document.querySelectorAll(".editable");
  editableElements.forEach((element) => {
    const savedContent = localStorage.getItem(element.id);
    if (savedContent) {
      element.innerText = savedContent;
    }
  });
}

function createRipple(event, element) {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = event.clientX - rect.left - size / 2 + "px";
  ripple.style.top = event.clientY - rect.top - size / 2 + "px";

  element.appendChild(ripple);

  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}
