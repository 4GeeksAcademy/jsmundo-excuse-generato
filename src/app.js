/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandm", "The maiLman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let whe = [
    "before the class",
    "when I was sLeeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function generateExcuse() {
    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhe = Math.floor(Math.random() * whe.length);
    let excuse =
      who[randomWho] +
      " " +
      action[randomAction] +
      " " +
      what[randomWhat] +
      " " +
      whe[randomWhe];
    return excuse;
  }
  document.getElementById("excuse").innerHTML = generateExcuse();
};
