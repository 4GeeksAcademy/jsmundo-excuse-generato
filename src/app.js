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
    let randomwho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomwhat = Math.floor(Math.random() * what.length);
    let randomwhe = Math.floor(Math.random() * whe.length);
    let excuse =
      who[randomwho] +
      " " +
      action[randomAction] +
      " " +
      what[randomwhat] +
      " " +
      whe[randomwhe];
    return excuse;
  }
  document.getElementById("excuse").innerHTML = generateExcuse();
};
