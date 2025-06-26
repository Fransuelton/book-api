import { Router } from "express";
import {
  createBook,
  deleteBook,
  getUserBooks,
} from "../controllers/bookController.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const router = Router();

router.post("/books", verifyUser, createBook);

router.get("/books/:id", getUserBooks);

router.delete("/books/:id", deleteBook);

export default router;
