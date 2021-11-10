
 window.onscroll = function(){
var navbar = document.getElementsByClassName("bodypart")[0];
var fixed = navbar.offsetTop;
var cart = document.getElementsByClassName("cart")[0];
var menu = document.getElementsByClassName("menu")[0];
console.log(fixed);
console.log(window.pageYOffset)
if (window.pageYOffset>=fixed){
  cart.classList.add ("cart1");
  menu.classList.add ("menu1");
}
else {cart.classList.remove("cart1");
menu.classList.remove("menu1");
}
 }
 
var buttons = document.querySelectorAll(".mainbody button");

