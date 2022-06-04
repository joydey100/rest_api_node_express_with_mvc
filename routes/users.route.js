const router = require("express").Router();
const {
  getUser,
  postNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

router.get("/", getUser);
router.post("/", postNewUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
