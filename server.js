// const express = require("express");
// const app = express();
// const cors = require("cors");
// const authRoutes = require("./routes/auth");
// const bodyParser = require("body-parser");
// const profileRoutes = require("./routes/profile");
// require("dotenv").config();
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());
// app.use("/api/auth", authRoutes);
// app.use("/api/profile", profileRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const knex = require("knex");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
require("dotenv").config();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
