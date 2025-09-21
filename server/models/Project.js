import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },            // project title
    description: { type: String, required: true },      // project description
    tech: [{ type: String, required: true }],           // stack/tech used
    image: { type: String },                            // project image (secure_url)
    imageId: { type: String },                          // Cloudinary public_id
    github: { type: String },                           // GitHub repo link
    demo: { type: String },                             // Live demo link
  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", ProjectSchema);
