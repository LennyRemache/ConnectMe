import express from "express";
import { getUser } from "../controllers/users.js";

const router = express.Router();

// User based on ID
router.get("/:id", getUser);
router.put("/:id", updateUser);

export default router;
