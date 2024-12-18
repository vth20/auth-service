import express from "express";
import usersController from "../../controllers/users";
import validate from "../../middlewares/validate";
import userValidations from "../../validations/user";
const router = express.Router();

router.get("/", usersController.findAllUsers);
router.get(
  "/:id",
  validate(userValidations.getUserById),
  usersController.findUserById
);

export default router;
