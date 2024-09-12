const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

app.use(bodyParser.json());
const db = require("./db");
const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");
const adminRoutes = require("./routes/adminRoutes");
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);
app.use("/admin", adminRoutes);
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
