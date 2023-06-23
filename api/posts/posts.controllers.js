const Post = require("../../models/Post");

exports.fetchPost = async (postId, next) => {
  try {
    const foundPost = await Post.findById(postId);
    return foundPost;
  } catch (error) {
    next(error);
  }
};
exports.postsCreate = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postsDelete = async (req, res, next) => {
  // const { postId } = req.params;
  try {
    // const foundPost = await Post.findById(postId);
    // if (foundPost) {
    await post.findByIdAndRemove({ _id: req.post._id });
    res.status(204).end();
    // } else {
    //   res.status(404).json({ message: "post not found" });
    // }
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

exports.postsUpdate = async (req, res) => {
  const { postId } = req.params;
  try {
    const foundPost = await Post.findById(postId);
    if (foundPost) {
      await foundPost.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postsGet = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPostById = (req, res, next) => {
  try {
    return res.status(200).json(req.post);
  } catch (error) {
    return next(error);
  }
};
