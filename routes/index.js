const { Router } = require("express");
const router = Router();
const users = require("./users");
const ventas = require("./ventas");
const corteCajas = require("./corteCajas");

/* GET home page. */
router.get("/detalleVenta", function (req, res, next) {
  res.render("detalleVenta", { title: "Pia-Pweb" });
});

router.get("/principal", (req, res) => {
  res.render("principal", { title: "Principal" });
});

router.get("/historialVenta", (req, res) => {
  res.render("historialVenta", { title: "Ya llegué" });
});

router.use("/usuario", users);
router.use("/ventas", ventas);
router.use("/corteCaja", corteCajas);

module.exports = router;
