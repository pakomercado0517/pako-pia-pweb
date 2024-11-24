const cargarVentas = async () => {
  try {
    const response = await axios.get(`/ventas/${user.id}`);
    const ventas = response.data;
    console.log("ventas", ventas);
    const tbody = document.querySelector(".table_body");
    tbody.innerHTML = ""; //Limpiamos el tbody por si ya tiene datos
    //Itermas sobre las ventas que devuelve la petición a la base de datos
    ventas.map((venta) => {
      const fila = document.createElement("tr");
      //Creamos las celdas de la fila
      const idCelda = document.createElement("td");
      idCelda.textContent = venta.id;
      const fechaCelda = document.createElement("td");
      fechaCelda.textContent = venta.fecha;
      const montoCelda = document.createElement("td");
      montoCelda.textContent = new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
      }).format(venta.total);

      //Creamos el botón para obtener detalels de la venta
      const botonDetalleCelda = document.createElement("td");
      const boton = document.createElement("button");
      boton.className = "btn btn-dark btn-sm";
      boton.textContent = "Detalle";

      //Agregamos el evento al botón
      boton.addEventListener("click", () => mostrarDetalles(venta.id));
      botonDetalleCelda.appendChild(boton);

      //Agregamos las celdas a la fila
      fila.appendChild(idCelda);
      fila.appendChild(fechaCelda);
      fila.appendChild(montoCelda);
      fila.appendChild(botonDetalleCelda);

      //Agregamos la fila al tbody
      tbody.appendChild(fila);
    });
  } catch (error) {
    console.log("Error al cargar los datos:", error);
  }
};

const mostrarDetalles = async (id) => {
  window.location.href = `/detalleVenta/${id}`;
};

//LLamamos la función cargarVentas al cargar la página
document.addEventListener("DOMContentLoaded", cargarVentas);
