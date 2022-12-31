const authController = require("../controllers/auth.controller");
const passport = require("passport");
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile"],
    })
  );
  app.get("/test",(req,res)=>{
    console.log("test", req);
    return res.send("Testing server api");
  })
  
  app.get("/api/auth/google/callback", passport.authenticate("google",{failureRedirect : "/login" ,successRedirect : "/"}))
};
