var elTitle = document.querySelector(".fs");
a = prompt("ismingizni kiriting");
elTitle.textContent = "Your name is " + a;

var elTitle3 = document.querySelector(".td");
c = prompt("telefon raqamingizni kiriting");
elTitle3.textContent = "Your phone number is " + c;

var elTitle2 = document.querySelector(".sd");
b = prompt("yoshingizni kiriting");
elTitle2.textContent = "Your age is " + b;
if (b > 18) {
  elTitle2.textContent = "Your age is " + b;
} else if (b == 18) {
  elTitle2.textContent = "Your age is " + b;
} else {
  elTitle.style.display = "none";
  elTitle3.style.display = "none";
  elTitle2.textContent = "Your age is under 18!";
}
