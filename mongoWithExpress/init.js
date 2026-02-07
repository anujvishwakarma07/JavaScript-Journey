const mongoose = require("mongoose");
const Chat = require("./models/chat");

main().then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chat1 = new Chat({
    from: "narutouzumaki",
    to: "hinatahyuga",
    msg: "Please come and cheer for me in the fight of nagato",
    created_at: new Date(),
});

const chats = [
  {
    from: "Sakura",
    to: "Sasuke",
    msg: "Come on and help me with Orochimaru",
    created_at: new Date(),
  },
  {
    from: "Naruto",
    to: "Sasuke",
    msg: "I will bring you back to the village",
    created_at: new Date(),
  },
  {
    from: "Hinata",
    to: "Naruto",
    msg: "I believe in you, always",
    created_at: new Date(),
  },
  {
    from: "Kakashi",
    to: "Team7",
    msg: "Training starts at dawn",
    created_at: new Date(),
  },
  {
    from: "Itachi",
    to: "Sasuke",
    msg: "You are still too weak",
    created_at: new Date(),
  },
  {
    from: "Jiraiya",
    to: "Naruto",
    msg: "Control your chakra properly",
    created_at: new Date(),
  },
  {
    from: "Tsunade",
    to: "Sakura",
    msg: "Your medical ninjutsu is improving",
    created_at: new Date(),
  },
  {
    from: "Gaara",
    to: "Naruto",
    msg: "You changed my life",
    created_at: new Date(),
  },
  {
    from: "Shikamaru",
    to: "Naruto",
    msg: "What a drag… but let’s do this",
    created_at: new Date(),
  },
  {
    from: "Neji",
    to: "Hinata",
    msg: "You are stronger than you think",
    created_at: new Date(),
  },
  {
    from: "Rock Lee",
    to: "Guy",
    msg: "Youth burns brighter today!",
    created_at: new Date(),
  },
  {
    from: "Guy",
    to: "Lee",
    msg: "Power of youth never fades",
    created_at: new Date(),
  },
  {
    from: "Obito",
    to: "Kakashi",
    msg: "Those who abandon friends are worse than scum",
    created_at: new Date(),
  },
  {
    from: "Madara",
    to: "Hashirama",
    msg: "This world is full of pain",
    created_at: new Date(),
  },
  {
    from: "Hashirama",
    to: "Madara",
    msg: "Peace is still possible",
    created_at: new Date(),
  },
  {
    from: "Minato",
    to: "Naruto",
    msg: "I am always watching over you",
    created_at: new Date(),
  },
  {
    from: "Kushina",
    to: "Naruto",
    msg: "Eat well and grow strong",
    created_at: new Date(),
  },
  {
    from: "Boruto",
    to: "Naruto",
    msg: "You never have time for me",
    created_at: new Date(),
  },
  {
    from: "Sarada",
    to: "Boruto",
    msg: "Stop acting childish",
    created_at: new Date(),
  },
  {
    from: "Mitsuki",
    to: "Boruto",
    msg: "You are my sun",
    created_at: new Date(),
  },
];


Chat.insertMany(chats).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

