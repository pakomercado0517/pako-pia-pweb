const { User, Rol } = require("../db");

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.findAll({ include: [{ model: Rol }] });
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  createUser: async (req, res) => {
    const { nombre, apellido, edad, direccion, telefono, status, email, rol } =
      req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        res.status(400).json({ message: "Usuario existente" });
      } else {
        const newUser = await User.create({
          nombre,
          apellido,
          edad,
          direccion,
          telefono,
          status,
          email,
        });
        const userRol = await Rol.create({ nombre: rol });
        const rolFinal = await newUser.setRol(userRol);
        res.status(200).json(rolFinal);
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findOne({ where: { id } });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const userFinded = await User.findOne({ where: { email, password } });
      if (userFinded) {
        req.session.isLoggedIn = true;
        req, (session.user = { userFinded });
        return res.redirect("/principal");
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
