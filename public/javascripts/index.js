const user = JSON.parse(localStorage.getItem("user"));
const user_main = document.getElementById("user_main");
console.log("user", user);

user_main.innerText = user.nombre.toUpperCase();
