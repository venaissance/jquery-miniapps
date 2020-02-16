import "./app1.css";
import $ from "jquery";

let num = $("#num");
num.text(localStorage.getItem("num") || 100);
let n = parseInt(num.text());

$("#add1").on("click", () => {
  n += 1;
  num.text(n);
  localStorage.setItem("num", n);
});

$("#sub1").on("click", () => {
  n -= 1;
  num.text(n);
  localStorage.setItem("num", n);
});
$("#mul2").on("click", () => {
  n *= 2;
  num.text(n);
  localStorage.setItem("num", n);
});

$("#div2").on("click", () => {
  n /= 2;
  num.text(n);
  localStorage.setItem("num", n);
});
