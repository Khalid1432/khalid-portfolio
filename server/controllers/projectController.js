import { Project } from "../models/Project.js";
import cloudinary from "../config/cloudinary.js";

// CREATE Project
export const createProject = async (req, res) => {
    try {
        const { title, description, tech, github, demo } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required",
            });
        }

        let imageUrl = null;
        let imageId = null;

        if (req.file) {
            const upload = await cloudinary.uploader.upload(req.file.path, {
                folder: "projects",
            });
            imageUrl = upload.secure_url;
            imageId = upload.public_id;
        }

        const newProject = new Project({
            title,
            description,
            tech: tech ? tech.split(",") : [],
            image: imageUrl,
            imageId,
            github,
            demo,
        });

        await newProject.save();

        res.status(201).json({
            success: true,
            message: "Project created successfully",
            data: newProject,
        });
    } catch (error) {
        console.error("Create Project Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// UPDATE Project
export const updateProject = async (req, res) => {
    try {
        const { title, description, tech, github, demo } = req.body;
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        let updatedData = { title, description, github, demo };

        if (tech) updatedData.tech = tech.split(",");

        if (req.file) {
            // Delete old image if exists
            if (project.imageId) {
                await cloudinary.uploader.destroy(project.imageId);
            }

            const upload = await cloudinary.uploader.upload(req.file.path, {
                folder: "projects",
            });
            updatedData.image = upload.secure_url;
            updatedData.imageId = upload.public_id;
        }

        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Project updated",
            data: updatedProject,
        });
    } catch (error) {
        console.error("Update Project Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// DELETE Project
export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        // Delete image from Cloudinary if exists
        if (project.imageId) {
            await cloudinary.uploader.destroy(project.imageId);
        }

        await project.deleteOne();

        res.status(200).json({ success: true, message: "Project deleted" });
    } catch (error) {
        console.error("Delete Project Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// GET all Projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        console.error("Get Projects Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
