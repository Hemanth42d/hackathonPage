const express = require("express");
const app = express();
const cors = require("cors");
const indexRouter = require("./routes/index");
const hackathonRoutes = require("./routes/hackathonRoutes");
const userRoutes = require("./routes/userRouters");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.use("/", indexRouter);
app.use("/api", hackathonRoutes);
app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log(`port is running at https://localhost:3000`);
});
