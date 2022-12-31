const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const session = require('express-session');
const mongoose = require("mongoose");
const passport = require('passport');
const passportSetup = require('./config/passportSetup');

const dbConfig = require("./config/db.config");
const serverConfig = require("./config/server.config");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(
  {
    origin : "http://localhost:3000"
  }
))
app.use(session({
  secret: "secret",
  resave: false ,
  saveUninitialized: true ,
}))


app.use(passport.initialize());
app.use(passport.session());

mongoose.set("strictQuery", false);
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on("error", () => {
  console.log("Error while connecting to MongoDB");
});
db.once("open", () => {
  console.log("Connected to mongoDB");
});

require('./routes/auth.routes')(app);

app.get("/", (req, res) => {
  res.send("Go on http:localhost:8000/auth/google")
});



require("./routes/auth.routes")(app);
app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on ${serverConfig.PORT}`);
});
