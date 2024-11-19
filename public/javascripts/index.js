const userButton = document.getElementById("user_button");
console.log("userButton", userButton);
const getUsers = async () => {
  try {
    const users = await axios.get("/usuario");
    console.log("los usuarios son:", users.data);
  } catch (error) {
    console.log(error);
  }
};
userButton.addEventListener("click", getUsers);
