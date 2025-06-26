import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const router = Router();

router.post("/users", createUser);

router.get("/users", getUsers);

router.put("/users/:id", verifyUser, updateUser);

router.delete("/users/:id", verifyUser, deleteUser);

export default router;
