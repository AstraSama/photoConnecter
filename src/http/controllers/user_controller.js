import User from "../../database/models/user_model";
import Post from "../../database/models/post_model";

const store = async (req, res) => {
  try {
    const { name, username, password, image, connections, requests } = req.body;
    await User.create({ name, username, password, image, connections, requests });

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
};

const sendRequest = async (req, res) => {
  try {
      const senderId = req.params.id; 
      const { receiverId } = req.body; 

      
      const user = await User.findById(senderId);
      if (user.requests.includes(receiverId)) {
          return res.status(400).send('Request already exists');
      }

      
      user.requests.push(receiverId);
      await user.save();

      
      const receiver = await User.findById(receiverId);
      receiver.requests.push(senderId);
      await receiver.save();

      res.status(201).send('Request sent successfully.');
  } catch (error) {
      res.status(500).send(error.message);
  }
};

const acceptRequest = async (req, res) => {
  try {
      const receiverId = req.params.id; 
      const { senderId } = req.body; 

      
      const receiver = await User.findById(receiverId);
      if (!receiver.requests.includes(senderId)) {
          return res.status(404).send('Request not found');
      }

      
      receiver.requests.pull(senderId);
      receiver.connections.push(senderId);
      await receiver.save();

      
      const sender = await User.findById(senderId);
      sender.connections.push(receiverId);
      await sender.save();

      res.status(200).send('Request accepted successfully.');
  } catch (error) {
      res.status(500).send(error.message);
  }
};

const rejectRequest = async (req, res) => {
  try {
      const receiverId = req.params.id; 
      const { senderId } = req.body; 

      
      const receiver = await User.findById(receiverId);
      if (!receiver.requests.includes(senderId)) {
          return res.status(404).send('Request not found');
      }

      
      receiver.requests.pull(senderId);
      await receiver.save();

      
      const sender = await User.findById(senderId);
      sender.requests.pull(receiverId);
      await sender.save();

      res.status(200).send('Request rejected successfully.');
  } catch (error) {
      res.status(500).send(error.message);
  }
};

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
  create_post,
  sendRequest,
  acceptRequest,
  rejectRequest,
  index,
  show,
  update,
  destroy,
};