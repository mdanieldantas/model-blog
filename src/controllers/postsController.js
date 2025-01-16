const postModel = require("../models/postModel");
const postsController = {
    
    //GET / na raiz
    index:(req, res) => {
        const posts= postModel.getAllPosts();

        res.render("index",{posts});
    },
    //GET /posts/:id
};

module.exports = postsController;