const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    name: "Joy Dey",
    email: "joy@yahoo.com",
  },
  {
    id: uuidv4(),
    name: "Rakibul Hasan",
    email: "rakib@yahoo.com",
  },
  {
    id: uuidv4(),
    name: "Rahul Chowdhury",
    email: "rahul@yahoo.com",
  },
];

module.exports = users;
