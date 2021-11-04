
 window.onscroll = function(){
var navbar = document.getElementsByClassName("bodypart")[0];
var fixed = navbar.offsetTop;
var cart = document.getElementsByClassName("cart")[0]
var 
console.log(fixed);
console.log(window.pageYOffset)
if (window.pageYOffset>=fixed){
  cart.classList.add ("cart1");
}
else {cart.classList.remove("cart1")
}
 }
 
// // function myFunction () {
// //   if (window.pageOffset >= fixed) {
// //     navbar.classList.add ("fixed");
// //   }
// //   else {
// //     navbar.classList.remove ("fixed");
// //   }
// // }
// // document.getElementsByClassName ("navbar").onscroll = myFunction;
// // function hello () {
// //   if (document.getElementById("word").innerHTML === "BROS"){
// //     document.getElementById("word").innerHTML = "BB";
// //   }
// // else {document.getElementById("word").innerHTML = "BROS";
// // }
// // }
// // document.getElementById("word")
// document.addEventListener(onscroll, function (){
//   document.getElementsByTagName("nav").onscroll = myFunction;
// }

// )
// function myFunction(){
//   if (document.getElementsByTagName("nav").onscroll= true) {
//     document.getElementsByTagName("nav") = fixed

//   }
// }
