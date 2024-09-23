const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const db = require("../config/db");
const userRoutes = require("../src/routes/user.route");
const prodRoutes = require("../src/routes/product.route");
// const authRoutes = require("../src/routes/auth.route");
const {PORT} = require("../config/serverConfig");

db.on("error", (err) => console.error("Connection failed:", err));
db.once("open", () =>
  console.log("Connection successful at 27017/kiranaExpress")
);

app.use("/api", userRoutes);
app.use("/api", prodRoutes);
// app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
