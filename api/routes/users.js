import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router()

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET USER
router.get("/:id", verifyUser, getUser);

//GET ALL USERS
router.get("/", verifyAdmin, getUsers);

export default router;
