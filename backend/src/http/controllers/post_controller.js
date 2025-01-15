import Post from "../../database/models/post_model.js";

const store = async (req, res) => {
    try {
      const { user, title, text, image } = req.body;
      await Post.create({ user, title, text, image });
  
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const index = async (req, res) => {
    try {
      const content = await Post.find().exec();
  
      res.json(content);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const show = async (req, res) => {
    try {
      const content = await Post.findById(req.params.id)
        .exec();
  
      res.json(content);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const update = async (req, res) => {
    try {
      const { user, title, text, image } = req.body;
  
      await Post.findByIdAndUpdate(req.params.id, {
          user, title, text, image
      }).exec();
  
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const destroy = async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id)
      .exec();
  
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  export default {
    store,
    index,
    show,
    update,
    destroy,
  };