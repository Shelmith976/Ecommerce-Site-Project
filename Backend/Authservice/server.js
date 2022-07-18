// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const { authrouter } = require("./routes/authRoute");
// // const { Router } = require("express");
// const app = express();
// const port = process.env.PORT;
// app.use(express.json());
// app.use(cors());
// app.use("/", authrouter);
// app.listen(port, () => console.log(`server running on port: ${port}`));

// module.exports = router;
const express = require("express");
require("dotenv").config();

const { router } = require("./routes/authRoute");

const app = express();

app.use(express.json());
app.use("/", router);
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is running on port:${port}`));
