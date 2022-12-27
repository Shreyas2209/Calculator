"use strict";

let all_btn = document.querySelectorAll(".number");
let outfield = document.querySelector(".output");
let eql_btn = document.querySelector(".equals");
let ac_btn = document.querySelector(".all-clear");
let del_btn=document.querySelector('.delete-btn')
let current_oprt=document.querySelector('.current-operand')

let expression;

all_btn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let btn_text = btn.textContent;
    if (btn_text == "x") {
      outfield.textContent += "*";
    } else {
      outfield.textContent += btn_text;
    }
    expression = outfield.textContent;
  });
});

eql_btn.addEventListener("click", function () {
  let result = eval(expression);
  outfield.textContent = result;
});

ac_btn.addEventListener("click", function () {
  outfield.textContent = "";
});

del_btn.addEventListener('click',function(){
  outfield.textContent=outfield.textContent.slice(0,-1)
})