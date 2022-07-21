const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const { router } = require('./routes/productRoute');
const { router1 } = require('./routes/orderRoute');

const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use('/product', router);
app.use('/', router1);

app.use((req, res, next) => {
  const error = new Error('Error');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.json({
    status: err.status,
    success: false,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
