import express from "express";
const router = express.Router()
import { createRoom, updateRoomAvailability, updateRoom, deleteRoom, getRoom, getRooms } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//CREATE ROOM
router.post("/:hotelId", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);

export default router;



