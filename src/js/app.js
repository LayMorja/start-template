import * as functions from "./modules/functions.js";
functions.isWebp();
function randomValue(min, max) {
   return Math.round(Math.random() * (max - min) + min)
}
setInterval(() => {
   document.querySelector("body").style.backgroundColor = `rgb(${randomValue(0, 255)}, ${randomValue(0, 255)}, ${randomValue(0, 255)})`;
}, 600)