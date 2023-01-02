const express = require("express");
const next = require("next");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const serverConfig = require("./config/server.config");
const dbConfig = require("./config/db.config");

const dev = process.env.NODE_ENV !== "production";

const nextApp = next({ dev });
// const handle = nextApp.getRequestHandler(); //handle link
// nextApp.prepare().then(() => {
// });
  
  
  const app = express();
  app.use(bodyParser.json());
  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
    );
    
    
    mongoose.set("strictQuery", false);
    mongoose.connect(dbConfig.DB_URL);
    const db = mongoose.connection;
    db.on("error", () => {
      console.log("Error while connecting to MongoDB");
    });
    db.once("open", () => {
      console.log("Connected to mongoDB");
    });
    


  app.get("*", (req, res) => {
    return handle(req, res);
  });
  app.get('/hello',(req, res)=>{
      return handle(req,res);
    })
    require('./routes/post.routes')(app);
    
    app.listen(serverConfig.PORT, () => {
      console.log(`Server is running on ${serverConfig.PORT}`);
    });