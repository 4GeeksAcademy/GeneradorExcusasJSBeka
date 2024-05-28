let excuse = document.querySelector("#excuse");
let body = document.querySelector("#body");

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];

const randomwho = Math.floor(Math.random() * who.length);
const randomaction = Math.floor(Math.random() * action.length);
const randomwhat = Math.floor(Math.random() * what.length);
const randomwhen = Math.floor(Math.random() * when.length);

window.onload = function() {
  excuse.innerHTML +=
    "<br>" +
    who[randomwho] +
    " " +
    action[randomaction] +
    " " +
    what[randomwhat] +
    " " +
    when[randomwhen];
};
