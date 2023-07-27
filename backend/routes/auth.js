import express from "express";
import { register, login } from "../controllers/auth.js";

const router = express.Router();

// (route, middleware, controller)
router.post("/register", register); // Routes HTTP POST requests to the specified path with the specified callback functions

router.get("/login", login);

export default router;
