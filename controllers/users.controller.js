let users = require("../models/users.models");
const { v4: uuidv4 } = require("uuid");

// users copy
let updatedUsers = [...users];

// Get users
const getUser = (req, res) => {
  res.status(200).json(users);
};

// post new user
const postNewUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: uuidv4(),
    name,
    email,
  };
  updatedUsers.push(newUser);
  res.status(200).json(updatedUsers);
};

// update user
const updateUser = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  updatedUsers
    .filter((user) => user.id === id)
    .map((selectedUser) => {
      selectedUser.name = name;
      selectedUser.email = email;
    });

  res.status(202).json(updatedUsers);
};

// Delete user
const deleteUser = (req, res) => {
  const id = req.params.id;
  const newUsers = updatedUsers.filter((user) => user.id !== id);
  res.status(202).json(newUsers);
};

module.exports = { getUser, postNewUser, updateUser, deleteUser };
