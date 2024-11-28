import User from "../../database/models/user_model";
import Post from "../../database/models/post_model";
import Request from "../../database/models/request_model";

const store = async (req, res) => {
  try {
    const { name, username, password, image, connections, requests } = req.body;
    const user = await User.create({ name, username, password, image, connections, requests });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const create_post = async (req, res) => {
    try {
        const { title, text } = req.body;
        const user_id = req.params.id;

        const post = await Post.create({ user: user_id, title, text });

        await User.findByIdAndUpdate(user_id, { $push: { posts: post._id}});

        res.status(201).json(post);
    } catch (error) {
        res.status(500).send(error.message);
    }
}; //TODO terminar funções

const index = async (req, res) => {
  try {
    const content = await User.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await User.findById(req.params.id)
      .exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { name, username, password, image, connections, requests } = req.body;

    await User.findByIdAndUpdate(req.params.id, {
        name, 
        username, 
        password, 
        image, 
        connections, 
        requests
    }).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
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