const login_email = document.querySelector(".email");
const login_password = document.querySelector(".contraseña");
const login_button = document.querySelector(".login_button");

const userLogin = async () => {
  try {
    const $login = await axios.post("/usuario/login", {
      email: login_email.value,
      contraseña: login_password.value,
    });
    if ($login.data && $login.data.nombre) {
      //Guardamos los datos del usuario loggueado en localStorage
      localStorage.setItem("user", JSON.stringify($login.data));
      //Redireccionamos a página llamada principal
      window.location.href = "/principal";
    }
  } catch (error) {
    console.log("error", error);
    console.log("error.status", error.status);
    if (error.status === 401) {
      alert(error.response.data.message);
      window.location.href = "/";
    } else if (error.status === 400) {
      alert(
        "Usuario no encontrado en el sistema, verifica tu email e intentalo de nuevo o registrate."
      );
    }
  }
};

login_button.addEventListener("click", (event) => {
  event.preventDefault();
  userLogin();
  const user = JSON.parse(localStorage.getItem("user"));
});

// document.addEventListener("DOMContentLoaded", function () {
//   const modals = ["pizza", "bebidas", "combos", "extras"];

//   modals.forEach((modalType) => {
//     const button = document.getElementById(`${modalType}Button`);
//     const modal = document.getElementById(`${modalType}Modal`);
//     const closeButton = modal.querySelector(".close-btn");
//     const itemList = document.getElementById(`${modalType}List`);

//     async function cargarItems() {
//       try {
//         itemList.innerHTML = "";
//       } catch (error) {
//         console.error(`Error loading ${modalType}:`, error);
//       }
//     }

//     button.addEventListener("click", () => {
//       modal.style.display = "block";
//       cargarItems();
//     });

//     closeButton.addEventListener("click", () => {
//       modal.style.display = "none";
//     });

//     window.addEventListener("click", (event) => {
//       if (event.target === modal) {
//         modal.style.display = "none";
//       }
//     });
//   });
// });
