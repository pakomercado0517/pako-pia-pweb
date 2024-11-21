const { Router } = require("express");
const router = Router();
const users = require("./users");
const ventas = require("./ventas");
const corteCajas = require("./corteCajas");

// Creamos el middleware para verificar la autentificación
const isAuthenticated = (req, res, next) => {
  if (req.session.isLoggedIn) {
    return next();
  }
  res.redirect("/login");
};

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/detalleVenta", function (req, res, next) {
  res.render("layout", { title: "Detalle de venta", view: "detalleVenta" });
});

router.get("/principal", (req, res) => {
  res.render("layout", { title: "Principal", view: "principal" });
});

router.get("/historialVenta", (req, res) => {
  res.render("layout", { title: "Historial de Venta", view: "historialVenta" });
});

router.use("/usuario", users);
router.use("/ventas", ventas);
router.use("/corteCaja", corteCajas);

module.exports = router;
