//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
const bodyPage = document.querySelector("body");
const headerTitle = document.querySelector("header");
const navMenu = document.querySelector("nav");
const mainPage = document.querySelector("main");
const footer = document.querySelector("footer");

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
footer.style.display = "flex";
});
page2btn.addEventListener("click", function () {
show(2);
footer.style.display = "none";
});
page3btn.addEventListener("click", function () {
show(3);
footer.style.display = "none";
});
hideall();

// Animation for Home Screen

navMenu.style.display = "none"; // Hide the navigator and footer
footer.style.display = "none";

function afterHomeAnim() {
	navMenu.style.display = "flex"; // Show the navigator after the animation is done
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
	current.classList.add("switch");
}

// MCQ Quiz

const btnSubmit = document.querySelector("#btnSubmit");
const btnReset = document.querySelector("#btnReset");
btnSubmit.addEventListener("click",CheckAns);
btnReset.addEventListener("click", ResetAns);
const scorebox = document.querySelector("#scorebox");
var q1, q2, q3, q4, q5, q6, score = 0;
function CheckAns(){
score = 0; 

q1 = document.querySelector("input[name='q1']:checked").value;
if(q1=="6") score++;

q2 = document.querySelector("input[name='q2']:checked").value;
if(q2=="2") score++;

q3 = document.querySelector("input[name='q3']:checked").value;
if(q3=="2") score++;

q4 = document.querySelector("input[name='q4']:checked").value;
if(q4=="1") score++;

q5 = document.querySelector("input[name='q5']:checked").value;
if(q5=="1") score++;

q6 = document.querySelector("input[name='q6']:checked").value;
if (q6=="3") score++;

scorebox.innerHTML="Score:"+score;
}

function ResetAns() {
	
var Q1, Q2, Q3, Q4, Q5, Q6;

Q1 = document.querySelectorAll(".Q1");
for (let q of Q1) {
	q.checked = false;
}

Q2 = document.querySelectorAll(".Q2");
for (let q of Q2) {
	q.checked = false;
}

Q3 = document.querySelectorAll(".Q3");
for (let q of Q3) {
	q.checked = false;
}

Q4 = document.querySelectorAll(".Q4");
for (let q of Q4) {
	q.checked = false;
}

Q5 = document.querySelectorAll(".Q5");
for (let q of Q5) {
	q.checked = false;
}

Q6 = document.querySelectorAll(".Q6");
for (let q of Q6) {
	q.checked = false;
}

}
