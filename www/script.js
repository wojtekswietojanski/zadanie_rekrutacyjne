const row11 = [
  "aa",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "a0",
  "amin",
  "aaa",
];
const row1 = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="];
const row22 = [
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "b0",
  "bmin",
  "bbb",
];
const row2 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"];
const row33 = [
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "c0",
  "cmin",
];
const row3 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "`"];
const row44 = ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d0"];
const row4 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

function losujKlawisz() {
  random14 = Math.floor(Math.random() * 4) + 1;
  if (random14 == 1) {
    tab = [];
    const losowyIndeks = Math.floor(Math.random() * row1.length);
    tab.push(row11[losowyIndeks]);
    tab.push(row1[losowyIndeks]);
    return tab;
  } else if (random14 == 2) {
    tab = [];
    const losowyIndeks = Math.floor(Math.random() * row2.length);
    tab.push(row22[losowyIndeks]);
    tab.push(row2[losowyIndeks]);
    return tab;
  } else if (random14 == 3) {
    tab = [];
    const losowyIndeks = Math.floor(Math.random() * row3.length);
    tab.push(row33[losowyIndeks]);
    tab.push(row3[losowyIndeks]);
    return tab;
  } else {
    tab = [];
    const losowyIndeks = Math.floor(Math.random() * row4.length);
    tab.push(row44[losowyIndeks]);
    tab.push(row4[losowyIndeks]);
    return tab;
  }
}

let currentKey = 0;
let score = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function xd(time) {
  let z = losujKlawisz();
  klawisz = document.getElementById(z[0]);
  if (klawisz) {
    klawisz.style.backgroundColor = "white";
  }

  document.addEventListener("keydown", function (event) {
    currentKey = event.key;
    if (z[1] == currentKey) {
      klawisz.style.backgroundColor = "green";
      score++;
      currentKey = 0;
    } else {
      if (row1.indexOf(currentKey) >= 0) {
        klawiszWrong = document.getElementById(row11[row1.indexOf(currentKey)]);
        klawiszWrong.style.backgroundColor = "red";
      }
      if (row2.indexOf(currentKey) >= 0) {
        klawiszWrong = document.getElementById(row22[row2.indexOf(currentKey)]);
        klawiszWrong.style.backgroundColor = "red";
      }
      if (row3.indexOf(currentKey) >= 0) {
        klawiszWrong = document.getElementById(row33[row3.indexOf(currentKey)]);
        klawiszWrong.style.backgroundColor = "red";
      }
      if (row4.indexOf(currentKey) >= 0) {
        klawiszWrong = document.getElementById(row44[row4.indexOf(currentKey)]);
        klawiszWrong.style.backgroundColor = "red";
      }
    }
  });

  await sleep(1920);
  const divsInRow = document.querySelectorAll(".row div");
  divsInRow.forEach(function (div) {
    div.style.backgroundColor = "";
  });

  z = 0;

  scoreResult = document.querySelector("#newGameh1");
  scoreResult.textContent = "Twój wynik to: " + score;
}
// document.addEventListener("DOMContentLoaded", function () {
//   document.addEventListener("keydown", function (event) {
//     currentKey = event.key;
//   });
// });
let difficultyLvl = 2000;

function easy() {
  difficultyLvl = 2000;
  clearInterval(interwal);
  interwal = setInterval(xd, difficultyLvl);
}

function mid() {
  difficultyLvl = 1200;
  clearInterval(interwal);
  interwal = setInterval(xd, difficultyLvl);
}

function hard() {
  difficultyLvl = 800;
  clearInterval(interwal);
  interwal = setInterval(xd, difficultyLvl);
}

let interwal = setInterval(xd, difficultyLvl);
