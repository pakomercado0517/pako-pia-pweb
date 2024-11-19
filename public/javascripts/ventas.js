const div = document.getElementById("miDiv");

const getVentas = async () => {
  const ventas = await axios.get("/ventas/1");
  ventas.data.map((el) => {
    div.appendChild(el.total);
  });
};

getVentas();
