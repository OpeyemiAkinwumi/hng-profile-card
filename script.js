"use strict";

const timeEl = document.querySelector(".time");

const now = Date.now();

console.log(now, timeEl);

// const milli = now.getMilliseconds();

// console.log(milli);

timeEl.textContent = now;

// Form Validation
