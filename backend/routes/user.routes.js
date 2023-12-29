import express from "express";
import { deleteSingleUser, forgetPassword, getAllUsers, getSingleUser, login, register, updateUser, verifyOtp } from "../controllers/user.controller.js";
import { authonticateWithToken, checkUserRole } from "../middleware/middleware.js";

const router = express.Router();

router.post("/user", register);
router.post("/user/login", login)
router.post("/user/forget", forgetPassword)
router.post("/user/verify", verifyOtp)
router.get("/user", authonticateWithToken,checkUserRole(['admin']),getAllUsers)
router.get("/user/:id", authonticateWithToken,checkUserRole(['admin']),getSingleUser)
router.put("/user/:id", updateUser)
router.delete("/user/:id",authonticateWithToken,checkUserRole(['admin']), deleteSingleUser)

export default router;
