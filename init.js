const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Amit",
    to: "Neha",
    msg: "Call me",
    created_at: new Date(),
  },
  {
    from: "Sumit",
    to: "Karan",
    msg: "Send me",
    created_at: new Date(),
  },
  {
    from: "Payal",
    to: "Nehal",
    msg: "Help me",
    created_at: new Date(),
  },
  {
    from: "Anu",
    to: "Menu",
    msg: "Send me your pic",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
