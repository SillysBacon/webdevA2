//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
onepage.classList.remove("pageAnim");
}
}
function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="flex"; //show the page
onepage.classList.add("pageAnim");
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});
hideall();

/*JS for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
const menuItemsList=document.querySelector("nav ul");
hamBtn.addEventListener("click",toggleMenus);
function toggleMenus(){ /*open and close menu*/
//if menuItemsList dont have the class "menuShow", add it, else remove it
menuItemsList.classList.toggle("menuShow");
//if menu is showing (has the class “menuShow”)
if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML="Close Menu"; //change button text to chose menu
}else{ //if menu NOT showing
hamBtn.innerHTML="Open Menu"; //change button text open menu
}
}

// Animation for Home Screen
const bodyPage = document.querySelector("body");
const headerTitle = document.querySelector("header");
const navMenu = document.querySelector("nav");
const mainPage = document.querySelector("main");
const footer = document.querySelector("footer");

navMenu.style.display = "none";
footer.style.display = "none";

function afterHomeAnim() {
	navMenu.style.display = "flex";
	footer.style.display = "flex";
}

setTimeout(afterHomeAnim, 1400);

// Switching the cats with Animation
const cat1 = document.querySelector("#cat1");
const cat2 = document.querySelector("#cat2");
const cat3 = document.querySelector("#cat3");
const cat4 = document.querySelector("#cat4");
const cat5 = document.querySelector("#cat5");
var allCat = document.querySelectorAll(".cat");

function hideCats() {
	for (let cat of allCat) {
		cat.style.display = "none";
		cat.classList.remove("switch");
	}
}

hideCats();

cat1.style.display = "flex";

cat1.addEventListener("click", function () {
	switchCat(2);
	cat2.classList.add("switch");
});

cat2.addEventListener("click", function () {
	switchCat(3);
	cat3.classList.add("switch");
});

cat3.addEventListener("click", function () {
	switchCat(4);
	cat4.classList.add("switch");
});

cat4.addEventListener("click", function () {
	switchCat(5);
	cat5.classList.add("switch");
});

cat5.addEventListener("click", function () {
	switchCat(1);
	cat1.classList.add("switch");
});


function switchCat(num) {
	hideCats();
	let current = document.querySelector("#cat" + num);
	current.style.display = "flex";
}