"use strict";

// Skapa Scheme
let schemes = ``;
for (let i = 0; i < 4; i++) {
  schemes += `
    <div id="scheme${i + 1}" class="schemediv">
        <div id="c1"></div>
        <div id="c2"></div>
        <div id="c3">Scheme: ${i + 1}</div>
        <div id="c4"></div>
        <div id="c5"></div>
    </div>
    `;
}
// Lägg till Scheme
document.querySelector("#schemes").innerHTML = schemes;

// Lägga till färgerna i varje scheme
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 5; j++) {
    document.querySelector(`#scheme${i} #c${j}`).style.backgroundColor = getColor(i, j);
  }
}

// Göra knapparna

let buttons = `
    <button id="bigger">Bigger</button>
    <button id="stop">Stop</button>
    <button id="smaller">Smaller</button>
`;
// Lägga till knapprna
document.getElementById("buttons").innerHTML = buttons;

document.getElementById("bigger").addEventListener("mousedown", function () {
  document.documentElement.style.setProperty("--sz1", "90vw");
  document.documentElement.style.setProperty("--sz2", "90vw");
  document.documentElement.style.setProperty("--sz3", "90vw");
  document.documentElement.style.setProperty("--sz4", "90vw");
});

document.getElementById("smaller").addEventListener("mousedown", function () {
  document.documentElement.style.setProperty("--sz1", "2vw");
  document.documentElement.style.setProperty("--sz2", "2vw");
  document.documentElement.style.setProperty("--sz3", "2vw");
  document.documentElement.style.setProperty("--sz4", "2vw");
});

document.getElementById("stop").addEventListener("mouseup", function () {
  let currentSize1 = getComputedStyle(document.querySelector("#circle")).getPropertyValue("width");
  console.log(document.querySelector("#circle"));
  let currentSize2 = getComputedStyle(document.querySelector("#figure")).getPropertyValue("width");
  console.log(document.querySelector("#figure"));
  let currentSize3 = getComputedStyle(document.querySelector("#second")).getPropertyValue("width");
  console.log(document.querySelector("#second"));
  let currentSize4 = getComputedStyle(document.querySelector("#third")).getPropertyValue("width");
  console.log(document.querySelector("#third"));

  document.documentElement.style.setProperty("--sz1", currentSize1);
  document.documentElement.style.setProperty("--sz2", currentSize2);
  document.documentElement.style.setProperty("--sz3", currentSize3);
  document.documentElement.style.setProperty("--sz4", currentSize4);
});

document.querySelector("#scheme1").classList.add("active");

document.querySelector("#scheme1").addEventListener("click", function () {
  document.querySelector(".active").classList.remove("active");
  document.querySelector("#scheme1").classList.add("active");
  for (let i = 1; i <= 5; i++) {
    document.documentElement.style.setProperty(`--c${i}`, getColor(1, i));
  }
});
document.querySelector("#scheme2").addEventListener("click", function () {
  document.querySelector(".active").classList.remove("active");
  document.querySelector("#scheme2").classList.add("active");
  for (let i = 1; i <= 5; i++) {
    document.documentElement.style.setProperty(`--c${i}`, getColor(2, i));
  }
});
document.querySelector("#scheme3").addEventListener("click", function () {
  document.querySelector(".active").classList.remove("active");
  document.querySelector("#scheme3").classList.add("active");
  for (let i = 1; i <= 5; i++) {
    document.documentElement.style.setProperty(`--c${i}`, getColor(3, i));
  }
});
document.querySelector("#scheme4").addEventListener("click", function () {
  document.querySelector(".active").classList.remove("active");
  document.querySelector("#scheme4").classList.add("active");
  for (let i = 1; i <= 5; i++) {
    document.documentElement.style.setProperty(`--c${i}`, getColor(4, i));
  }
});
