const postController = require("../controllers/post.controller");
module.exports = (app) => {
  
    app.post("/post", postController.createPost);

    app.get("/posts", postController.getPost);
};
