const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { router } = require('./routes/authRoute');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
const port = 5000;

app.listen(port, () => console.log(`Server is running on port:${port}`));
