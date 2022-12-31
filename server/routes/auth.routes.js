const authController = require("../controllers/auth.controller");
const passport = require("passport");
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile"],
    })
  );
  
  app.get("/api/auth/google/callback", passport.authenticate("google",{failureRedirect : "" ,successRedirect : ""}))
};
