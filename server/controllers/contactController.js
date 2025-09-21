import { Contact } from "../models/Contact.js";
import dotenv from "dotenv";
import transporter from "../config/mailer.js";
dotenv.config();

export const handleContact = async (req, res) => {
  try {
    const { name, email, subject, body } = req.body;

    if (!name || !email || !body) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message body are required",
      });
    }

    // Save to DB
    const newContact = new Contact({ name, email, subject, body });
    await newContact.save();

    // ================= ADMIN EMAIL =================
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2c3e50;">📩 New Contact Form Submission</h2>
        <p>You have received a new message from your website contact form.</p>

        <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          ${subject ? `<tr><td><strong>Subject:</strong></td><td>${subject}</td></tr>` : ""}
          <tr><td><strong>Message:</strong></td><td>${body}</td></tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"Website Contact" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: subject || "New Contact Form Submission",
      html: adminHtml,
    });

    // ================= AUTO-REPLY TO USER =================
    const userHtml = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2>🤝 Thank You for Contacting Us</h2>
            <p>Hi <strong>${name}</strong>,</p>
            <p>We have received your message and will get back to you soon.</p>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
            <blockquote style="border-left: 4px solid #2c3e50; padding-left: 10px; color: #555;">
              ${body}
            </blockquote>
            <p style="margin-top: 20px;">Best Regards,<br/>Khalid Jameel</p>
          </div>
        `;

    await transporter.sendMail({
      from: `"Khalid Jameel" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message ✔",
      html: userHtml,
    });

    res.status(201).json({ success: true, message: "Message sent, saved & auto-reply sent" });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// GET /api/contact
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error("Fetch Contacts Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
