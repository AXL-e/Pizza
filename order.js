const menu = document.querySelector(".menu");
const pizza = document.querySelector(".pizza_list");
const login = document.querySelector(".login");
const price = document.getElementById("price");
const secprice = document.getElementById("secprice");
// const number = document.getElementById("num").innerHTML

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn_menu")) {
    menu.classList.toggle("menu--show");
    pizza.classList.remove("pizza_list--show");
    login.classList.remove("login--show");
  }
  if (e.target.matches(".btn_pizza")) {
    pizza.classList.toggle("pizza_list--show");
    menu.classList.remove("menu--show");
    login.classList.remove("login--show");
  }

  if (e.target.matches(".btn_login")) {
    login.classList.toggle("login--show");
    pizza.classList.remove("pizza_list--show");
    menu.classList.remove("menu--show");
  }
});
let number = 1
function increment() {
  number++
  let counter = document.getElementById("number").innerHTML = number
  counter.innerHTML = number 
  secprice.innerHTML =price.innerHTML *  counter 
}
function dic() {
  number-- 
  let counter = document.getElementById("number")
  counter.innerHTML = number 
}