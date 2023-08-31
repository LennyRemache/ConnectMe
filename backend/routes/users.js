import express from "express";
import { getUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// User based on ID
router.get("/:userName", getUser);
router.put("/:userName", updateUser);

export default router;
