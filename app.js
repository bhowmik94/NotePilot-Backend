// app file is seperated from server file to facilitate testing

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
app.use(cookieParser());

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, origin || true); // allow all origins
    },
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));

module.exports = app;
