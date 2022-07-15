const poolPromise = require("../config/poolPromise");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authControllers = {
  Register: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      let pool = await poolPromise();
      const hashedPwd = await bcrypt.hash(password, 1);
      console.log(hashedPwd);
      let insert = await pool.query(
        `INSERT INTO Users(username, email, password) values ('${username}','${email}', '${hashedPwd}')`
      );
      if (insert) {
        const token = jwt.sign({ email: email }, process.env.TOKEN, {
          expiresIn: "10m",
        });
        res.status(200).json({
          success: true,
          user: { username, email },
          message: "user registered",
          token: token,
        });
        return;
      }
    } catch (error) {
      {
        return res.status(401).json({
          message: error.message,
        });
      }
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      let pool = await poolPromise();
      let findUser =
        await pool.query`SELECT * FROM Users WHERE email = ${email}`;
      console.log(findUser);
      if (findUser.recordset.length > 0) {
        const user = findUser.recordset[0];
        console.log(user);

        const auth = await bcrypt.compare(password, user.userPassword);

        if (auth) {
          const token = jwt.sign({ email: email }, process.env.TOKEN, {
            expiresIn: "20m",
          });
          res.status(200).json({
            email: email,
            message: "Logged in successfully",
            token: token,
          });
        }
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        message: error.message,
      });
    }
  },
};

module.exports = { ...authControllers };
