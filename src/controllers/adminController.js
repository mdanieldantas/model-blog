const postModel = require("../models/postModel");

const adminController = {
  //GET /admin
  index: (req, res) => {
    const posts = postModel.getAllPosts();

    res.render("admin", { posts });
  },

  //GET /admin/create
  create: (req, res) => {
    res.render("newPostForm");
  },

  //POST /admin/create
  save: (req, res) => {
    const { title, content } = req.body;

    const newPost = postModel.createPost(title, content);
    postModel.savePost(newPost);

    res.redirect("/admin");
  },
  
  //GET /admin/edit/:id

  //POST /admin/update/:id

  //POST /admin/delete/:id
};

module.exports = adminController;
