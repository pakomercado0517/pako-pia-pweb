const user = JSON.parse(localStorage.getItem("user"));
const user_main = document.getElementById("user_main");
const logoutButton = document.querySelector(".logout_button");

const logout = async () => {
  try {
    const response = await axios.post("/usuario/logout");
    if (response.statusText === "OK") {
      alert("Sesión cerrada con éxito");
      localStorage.clear("user");
      window.location.href = "/";
    }
  } catch (error) {
    console.log("Error al cerrar la sesión", error);
    alert("No se pudo cerrar la sesión");
  }
};
console.log("user", user);
logoutButton.addEventListener("click", logout);
user_main.innerText = user.nombre.toUpperCase();
