const { Router } = require("express");
const router = Router();
const users = require("./users");
const ventas = require("./ventas");
const corteCajas = require("./corteCajas");
const categoriaProducto = require("./categoriaProducto");

// Crea una función que sea el middleware para verificar la autentificación
const isAuthenticated = (req, res, next) => {
  console.log("req.session", req.session);
  if (req.session.isLoggedIn) {
    return next();
  }
  res.redirect("/");
};

/* GET home page. */
router.get("/", (req, res) => {
  res.render("layout", {
    title: "Login de la App",
    view: "login",
    script: "main",
  });
});

router.get("/detalleVenta/:id", isAuthenticated, function (req, res, next) {
  res.render("layout", {
    title: "Detalle de venta",
    view: "detalleVenta",
    script: "detalleVenta",
  });
});

router.get("/principal", isAuthenticated, (req, res) => {
  res.render("layout", {
    title: "Principal",
    view: "principal",
    script: "principal",
  });
});

router.get("/historialVenta", isAuthenticated, (req, res) => {
  res.render("layout", {
    title: "Historial de Venta",
    view: "historialVenta",
    script: "historialVenta",
  });
});

router.use("/usuario", users);
router.use("/ventas", ventas);
router.use("/corteCaja", corteCajas);
router.use("/categoriaProducto", categoriaProducto);

module.exports = router;
