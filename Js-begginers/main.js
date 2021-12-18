// Logging output
// // Do not use for debugging. Stops script and only strings
// alert("Hello world");
// console.log("Hello world");
// console.error("This is an error");
// console.warn("This is an warning");

// VARIABLES - var, let, const let age = 30; let can be re-assigned, const can not age = 31;
// DATA TYPES - String, Number, Boolean, null, undefined
// const name = "Brad"; const age = 37; const rating = 3.5; const isCool = true;
// const x = null;
// const y = undefined;
// let z; // undefined

// Check type
// console.log(typeof z);

// STRINGS

// Concatenation
// console.log("My name is " + name + " and I am ' + age);
// Template literal (better)
// console.log(`My name is ${name} and I am ${age}`);

// String methods & properties
// const s = "Hello World";
// let val;
// Get length
// val = s.length;
// Change case
// val = s.toUpperCase();
// val = s.toLowerCase();
// Get sub string
// val = s.substring(0, 7);
// Split into array
// val = s.split(" ");
// console.log(val);

// ARRAYS - Store multiple values in a variable
// let numbers = [1,2,3,4,5];
// numbers = [];
// console.log(numbers);
// const fruits = ["apples", "orange", "pears", "grapes"];
// console.log(numbers, fruits);
// Get one value - Arrays start at 0
// console.log(fruits[1]);
// Add value
// fruits[4] = "blueberries";
// Add value using push()
// fruits.push("strawberries");
// Add to beginning
// fruits.unshift("mangos");
// Remove last value
// fruits.pop();
// Check if array
// console.log(Array.isArray(fruits));
// Get index
// console.log(fruits.indexOf("oranges"));

// OBJECT LITERALS
// const person = {
//    name: "Kiet",
//    age: 30,
//    hobbies: ["music", "movies", "sports"],
//    address: {
//       street: "No Trang Long",
//       city: "Pleiku",
//       state: "Vn"
//    }
// }

// Get single value
// console.log(person.name)

// Get array value
// console.log(person.hobbies[1]);

// Get embedded object
// console.log(person.address.city);

// Add property
// person.email = 'caotuankietc3a@gmail.com';
// console.log(person.email);

// Array of objects
// const todos = [
//    {
//       id: 1,
//       text: 'Take out trash',
//       isComplete: false
//    },
//    {
//       id: 2,
//       text: 'Dinner with wife',
//       isComplete: false
//    },
//    {
//       id: 3,
//       text: 'Meeting with boss',
//       isComplete: true
//    }
// ];

// Get specific object value
// console.log(todos[0].text);

// =============================== Improtant convert to JSON ==========================
// Format as JSON
// console.log(JSON.stringify(todos));
// =============================== Improtant convert to JSON ==========================

// LOOPS

// For
// for (let i = 0; i <= 10; i++) {
//      console.log(`For Loop Number: ${i}`);
// }

// While
// let i = 0
// while (i <= 10) {
//      console.log(`While Loop Number: ${i}`);
//      i++;
// }

// Loop Through Arrays
// For Loop
// for (let i = 0; i < todos.length; i++) {
//      console.log(` Todo ${i + 1}: ${todos[i].text}`);
// }

// For...of Loop
// for (let todo of todos) {
//      console.log(todo.text);
// }

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));
// for (let i = 0; i < items.length; i++) {
//    console.log(items[i]);
// }

// HIGH ORDER ARRAY METHODS (show prototype)

// CONDITIONALS

// Simple If/Else Statement
// const x = 30;

// if (x === 10) {
//      console.log('x is 10');
// } else if (x > 10) { console.log('x is greater than 10');
// } else {
//      console.log('x is less than 10')
// }

// Switch
// color = 'blue';

// switch (color) {
//      case 'red':
//           console.log('color is red');
//      case 'blue':
//           console.log('color is blue');
//      default:
//           console.log('color is not red or blue')
// }

// Ternary operator / Shorthand if
// const z = color === 'red' ? 10 : 20;
// console.log(z);

// MANIPULATING THE DOM
// let ul = document.querySelector(".items");
// console.log(ul);
// ul.remove();
// ul.lastElementChild.textContent = "Hello";
// console.log(ul.children[0].innerText); //Item 1
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
// console.log(ul.lastElementChild.innerHTML);
// ul.children[1].innerText = 'Brad';
// console.log(ul.children[1].innerText);

// Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// ul = document.querySelector("#users");
// console.log(ul);

// ul = document.getElementById("users");
// console.log(ul);

// ul = document.getElementsByClassName("msg");
// console.log(ul);

// const Btn = document.querySelector(".btn");
// Btn.style.background = "red";

// EVENTS

// Mouse Event

// function removeEvent(e) {
//    e.removeEvent();
//    Btn.removeEventListener("click", PreventEvent);
// }

// function PreventEvent(e) {
//    e.preventDefault();
//    console.log(e.target.className); // get className
//    console.log(e.target);
//    console.log(e.target.type);
//    document.getElementById('my-form').style.background = '#ccc';
//    document.querySelector('body').classList.add('bg-dark');
//    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//    ul.lastElementChild.style.color = "blue";
// }
// Btn.addEventListener("click", PreventEvent);

// -------------- Another for using addEventListener -------------------
// Btn.addEventListener("click", (e) => {
//    e.preventDefault();
//    console.log(e.target.className); // get className
//    document.getElementById('my-form').style.background = '#ccc';
//    document.querySelector('body').classList.add('bg-dark');

//    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//    ul.lastElementChild.style.color = "blue";
// });

// Keyboard Event
// const nameInput = document.querySelector("#name");
// nameInput.addEventListener("input", () => {
// document.querySelector(".container").append(nameInput.value);
// console.log(nameInput.value);
// });

// USER FORM SCRIPT

// Put DOM elements into variables
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// Listen for form submit
// myForm.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//    e.preventDefault();
//    if (nameInput.value === "" || emailInput.value === "") {
//       msg.classList.add("error");
//       msg.innerHTML = "Please enter all fields";
//       setTimeout(() => {
//          msg.classList.remove("error");
//          msg.innerHTML = "";
//       }, 2000);
// setTimeout(() => msg.remove(), 1000);
// }
// else {
//    const ul = document.querySelector(".items");
//    const it = document.querySelectorAll(".item");
//    let x = nameInput.value + ": " + emailInput.value;
//    let y1 = document.createTextNode(x);

//    let y = document.createTextNode(`${nameInput.value}: ${emailInput.value}`);

// let y2 = document.createTextNode("sdfsfadfasd");
// const li = document.createElement("li");
// li.append(y2);
// li.append("helo");
// li.append("helo");
// li.appendChild(y2);
// console.log(li.textContent);
// li.append(y1);
// ul.appendChild(li);
// ul.insertBefore(li, it[0]);
// ul.insertBefore(y, ul.childNodes[7]);
// ul.appendChild(y);

// Clear fields
// nameInput.value = '';
// emailInput.value = '';
// }

// }

// let tag = document.getElementsByTagName("li:nth-child(odd)");
// console.log(tag);
// let query = document.querySelectorAll(".item:nth-child(odd)");
// console.log(query);

// Traversing the Dom
var itemList = document.querySelector(".items");

// Get parent Node
// console.log(itemList);
// console.log(itemList.parentNode);
// console.log(itemList.parentElement);
// console.log(itemList.parentNode.parentNode);

// children
// console.log(itemList.children); // only HTML colection
// console.log(itemList.children[1]);
// itemList.children[1].style.background = 'yellow';

// childNodes
// console.log(itemList.childNodes); // have text

// firsChild and lastChild
// console.log(itemList.firstChild);
// console.log(itemList.lastChild);
// firstElement
// console.log(itemList.firstElementChild);
// console.log(itemList.lastElementChild);
// itemList.firstElementChild.textContent = "Hello 123"
// itemList.lastElementChild.textContent = "Hello 345"

// nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextSibling.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previouseElementSibling
// console.log(itemList.children[0].nextElementSibling);

// createElement

// Create a div
// let newDiv = document.createElement("div");
// Add class
// newDiv.className = "Heelo hello";
// Add id
// newDiv.id = "Hello heeeee";
// Add attribute
// newDiv.setAttribute("title", "Hello Div");
// newDiv.setAttribute("class", "Divvvvv");
// console.log(newDiv);

// createTextNode
// let newDivText = document.createTextNode("Hello World");
// Add text to newDiv
// newDiv.appendChild(newDivText);
// newDiv.setAttribute("style", "color: yellow");
// newDiv.setAttribute("style", "color: yellow; font-size: 30px");
// console.log(newDiv);

// console.log(newDiv);
// let mainHead = document.querySelector("#main-header");
// let Header = document.querySelector("#main-header  h1");
// console.log(Header);
// mainHead.insertBefore(newDiv, Header);

// const ClickButton = (e) => {
//    console.log(e.target);
// };

// Event
// let button = document.getElementById("button").addEventListener("click", ClickButton);
// function ClickButton(e) {
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// console.log(e.type);
// console.log(e.clientX);
// console.log(e.clientY);
// console.log(e.offsetX);
// console.log(e.offsetY);
// console.log(e.altKey);
// console.log(e.shiftKey);
// console.log(e.ctrlKey);

// let Out = document.getElementById("output");
// Out.appendChild(e.target);
// console.log(Out);
// Out.innerHTML = "<h3>" + e.target.id + "</h3>";
// }

// let Name = document.querySelector("#name");
// let Email = document.querySelector("#email");

// Name.addEventListener("keypress", onkeyPress);

// let newEl = document.createElement("p");
// newEl.className = "newElement";

// let newElText = document.createTextNode("");
// newEl.appendChild(newElText);

// let ul_I = document.querySelector(".items");
// ul_I.insertBefore(newEl, ul_I.children[2]);

// function onkeyPress(e) {
//    let character = e.keyCode;
//    let Value_character = String.fromCharCode(character);
//    ul_I.children[2].textContent += Value_character;
//    Email.textContent += Value_character;

// }

// let button = document.getElementById("button");
// Click
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);

// Mouse
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);
// button.addEventListener("mouseenter", runEvent); // only Element itself
// button.addEventListener("mouseleave", runEvent); // only Element itself
// button.addEventListener("mouseover", runEvent); // all Element(inner element);
// button.addEventListener("mouseout", runEvent); // all Element(inner element);
// button.addEventListener("mousemove", runEvent);

// let Output = document.getElementById("output");
// function runEvent(e) {
//    e.preventDefault();
// console.log("Event Type: " + e.type);
//    Output.innerHTML = "<h3>MouseX: " + e.offsetX + "</h3><h3>MouseY: " + e.offsetY + "</h3>";
//    document.body.style.background = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
// console.log(e.target.value);
// }

// let itemInput = document.querySelectorAll("input[type='text']");
// let form = document.querySelector("form");
// let selectItem = document.querySelector("select");
// selectItem.addEventListener("change", runEvent);
// console.log(selectItem);

// itemInput.forEach((item, index) => {
// item.addEventListener("keydown", runEvent);
// item.addEventListener("keyup", runEvent);
// item.addEventListener("keypress", runEvent);

// item.addEventListener("focus", runEvent);
// item.addEventListener("blur", runEvent);

// item.addEventListener("copy", runEvent);
// item.addEventListener("paste", runEvent);
// item.addEventListener("cut", runEvent);

// item.addEventListener("input", runEvent);
// });

// let liList = document.querySelector(".items");
// let formItem = document.querySelector("form");

// let filterItem = document.querySelector("#filter");
// filterItem.addEventListener("keyup", filterFunction);

// formItem.addEventListener("submit", submitEvent);

// function submitEvent(e) {
//    e.preventDefault();
//    let emailItem = document.querySelector("#email");
//    let nameItem = document.querySelector("#name");
//    let nameValue = nameItem.value;
//    let emailValue = emailItem.value;

//    let itemX = document.createElement("li");
//    let buttonX = document.createElement("button");

// itemX.className = "items";
//    itemX.classList.add("item");
//    buttonX.classList.add("btn", "delete");

//    itemX.appendChild(document.createTextNode(`${nameValue}: ${emailValue}`));
//    buttonX.appendChild(document.createTextNode(`X`));
//    liList.appendChild(itemX);
//    liList.appendChild(buttonX);

//    let buttonList = document.querySelectorAll(".delete");
//    buttonList.forEach((item, index) => {
//       item.addEventListener("click", removeItem);
//    });
// }

// for (let i = 0; i < liList.children.length; i++) {
//    liList.children[i].addEventListener()
// }
// console.log(buttonList.previousElementSibling);
// console.log(buttonList);

// function removeItem(e) {
//    if (e.target.classList.contains("delete")) {
//       if (confirm("Are you sure?")) {
//          liList.removeChild(e.target.previousElementSibling);
//          liList.removeChild(e.target);
//       }
//    }
// }
// function filterFunction(e) {
//    let searchVal = e.target.value.toLowerCase();
//    console.log(searchVal);

//    let only_li_List = liList.querySelectorAll(".item");
//    for (let i = 0; i < only_li_List.length; i++) {
//       console.log(only_li_List[i].textContent.toLowerCase().indexOf(searchVal));
//       if (only_li_List[i].textContent.toLowerCase().indexOf(searchVal) != -1) {
//          only_li_List[i].style.display = "block";
//          only_li_List[i].nextElementSibling.style.display = "block";
//       }
//       else {
//          only_li_List[i].style.display = "none";
//          only_li_List[i].nextElementSibling.style.display = "none";
//       }
//    }
// }

const x = 23;
const z = '23';
