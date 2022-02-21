const { User } = require("../models");

const userData = [
  {
    username: "raman",
    password: "PassPass",
  },
  {
    username: "jonasty",
    password: "JonJon",
  },
  {
    username: "vishy",
    password: "123abc",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
