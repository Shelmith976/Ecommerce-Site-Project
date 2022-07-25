const poolPromise = require('../config/poolPromise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authControllers = {
  Register: async (req, res) => {
    const { username, email, password} = req.body;
    try {
      let pool = await poolPromise();
      const salt = await bcrypt.genSalt(10)
      const hashedPwd = await bcrypt.hash(password, salt);
      console.log(hashedPwd);
      const emailVerify = await pool
        .request()
        .input('email', email)
        .execute('EmailVerify');
      if (emailVerify.recordset.length > 0) {
        return res.status(403).json({
          status: 404,
          success: false,
          message: 'Email exists',
        });
      }

      const usernameVerify = await pool
        .request()
        .input('username', username)
        .execute('UsernameVerify');
      if (usernameVerify.recordset.length > 0) {
        return res.status(403).json({
          status: 404,
          success: false,
          message: 'Username exists',
        });
      }
      pool
        .request()
        .input('username', username)
        .input('password', hashedPwd)
        .input('email', email)
        .execute(`addUsers`)
        .then((results) => {
          if (results.rowsAffected) {
            const token = jwt.sign({ email: email }, process.env.TOKEN, {
              expiresIn: '30m',
            });
            res.status(200).json({
              success: true,
              user: { username, email },
              message: 'user registered',
              token: token,
            });
          }
        });
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
      // const hashedPwd = await bcrypt.hash(password, 1)
      const data = await pool
        .request()
        .input('email', email)
        .execute(`EmailVerify`);
      if (data.recordset.length > 0) {
        const user = data.recordset[0];
        const auth = await bcrypt.compare(password, user.password);

        if (auth) {
          const token = jwt.sign({ email: email }, process.env.TOKEN, {
            expiresIn: '40m',
          });
          res.status(200).json({
            email: email,
            message: 'Logged in successfully',
            token: token,
          });
        } else {
          res.status(401).send({
            success: false,
            message: 'Wrong password',
          });
        }
      } else {
        res.status(404).send({
          success: false,
          message: 'user does not exist',
        });
      }
    } catch (error) {
      console.log('db err', error);
      res.status(500).send({
        success: false,
        message: 'Database error',
      });
    }
  },
  updateProfile: async (req, res) => {
    let { username, email, password } = req.body;
    let pool = await poolPromise();
    const hashedPwd = await bcrypt.hash(password, 1);
    console.log(hashedPwd);
    pool
      .request()
      .input('username', username)
      .input('email', email)
      .input('password', hashedPwd)
      .execute(`addUsers`)

      .then((results) => {
        if (results.rowsAffected) {
          const token = jwt.sign({ email: email }, process.env.TOKEN, {
            expiresIn: '30m',
          });
          res.status(200).json({
            success: true,
            user: { username, email },
            message: 'Profile updated',
            token: token,
          });
        }
      });
  },
};

module.exports = { ...authControllers };
