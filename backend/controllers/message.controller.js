import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json(newMessage);
  } catch (err) {
    console.log("error in message controller", err.message);
    res.status(500).json({ error: "internal server error" });
  }
};

import mongoose from "mongoose";
export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const userToChatObjectId = new mongoose.Types.ObjectId(userToChatId);

    console.log("senderId", senderId);
    console.log("userToChatId", userToChatObjectId);
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatObjectId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    //res.status(200).json(conversation.messages);
    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (err) {
    console.log("error in getmessage controller", err.message);
    res.status(500).json({ error: "internal server error" });
  }
};
