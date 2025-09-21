import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        subject: { type: String },
        body: { type: String, required: true }
    },
    { timestamps: true }
);

export const Contact = mongoose.model('Contact', ContactSchema);

