import express from "express";
import { fetchUserData, updateUserData } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/:id", authMiddleware, fetchUserData);
router.put("/:id", authMiddleware, updateUserData);

export default router;
