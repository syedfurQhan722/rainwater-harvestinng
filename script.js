// console.log('This is a Java Script File');

// let name = 'Syed';
// const city = 'Bengaluru';

// let age = 15;
// if(age>=18) {
//     console.log('Adult')
// } else {
//     console.log('Minor')
// }

// console.log(name,city)

// function greet () {
//     alert('JS Function is Working');
// }

// greet();
// Function Declaration
// function add(a,b) {
//     return a+b;
// }

// console.log(add(5,9));

// //Funcion Expression
// const multiply = function(x,y) {
//     return x*y;
// }
//  console.log(multiply(6,6));

// //Arrow Function
// // lamda wihtout using the keyword function we can used lamda
// const greet = (name) => {
//     return 'Welcome' + name;
// };
//  console.log(greet('Syed'))
//DOM is used to fetch data or object present in document

let count = 0;

function increase() {
    count ++;
    document.getElementById('count').innerText = 
    count;
}
function decrease() {
    count --;
    document.querySelector('#count').innerText = 
    count;
}
 function changebg(){
    let r = Math.trunc(Math.random() * 255);
    let g = Math.trunc(Math.random() * 255);
    let b = Math.trunc(Math.random() * 255); 

    const bodybg = document.querySelector('body');
    bodybg.style.cssText = `background-color: rgb(${r} ${g} ${b})`;
    
    const h2_bg =document.querySelector('#rgb');
    h2_bg.innerHTML = `RGB: (${r} ${g} ${b})`
}
btn.addEventListener("click", () => {
  // Toggle the 'light-mode' class on the body
  document.body.classList.toggle("light-mode");
  
  // Optional: Update button text
  if (document.body.classList.contains("light-mode")) {
    btn.textContent = "Switch Mode";
  } else {
    btn.textContent = "Switch Mode";
  }
});

