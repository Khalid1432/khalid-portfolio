import express from "express";
import upload from "../middlewares/multer.js";
const router = express.Router();

import { registerUser, loginUser } from "../controllers/auth.js";
import { handleContact, getAllContacts } from "../controllers/contactController.js";   
import {
  createProject,
  getAllProjects,
  updateProject,
  deleteProject,
} from "../controllers/ProjectController.js";

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/contact", handleContact);   // save + send mail
router.get("/contact", getAllContacts);   // fetch all messages

router.post("/project", upload.single("image"), createProject);
router.get("/projects", getAllProjects);
router.put("/project/:id", upload.single("image"), updateProject);
router.delete("/project/:id", deleteProject);

export default router;
