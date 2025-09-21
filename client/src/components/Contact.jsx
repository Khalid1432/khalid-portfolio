import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { sendContact } from "../api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContact(formData);
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", body: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("❌ Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white pb-20 pt-14 px-6 md:px-16 overflow-hidden"
    >
      {/* Gradient Blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]"
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-4xl md:text-5xl font-extrabold mb-16 
                   bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        onSubmit={handleSubmit}
        className="relative z-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-xl 
                   border border-white/10 rounded-2xl p-8 shadow-lg flex flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="flex-1 px-4 py-3 rounded-xl bg-black/30 border border-white/20 
                       placeholder-gray-400 text-white focus:outline-none focus:ring-2 
                       focus:ring-purple-500/50 transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="flex-1 px-4 py-3 rounded-xl bg-black/30 border border-white/20 
                       placeholder-gray-400 text-white focus:outline-none focus:ring-2 
                       focus:ring-purple-500/50 transition"
          />
        </div>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 
                     placeholder-gray-400 text-white focus:outline-none focus:ring-2 
                     focus:ring-purple-500/50 transition"
        />

        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="6"
          className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 
                     placeholder-gray-400 text-white focus:outline-none focus:ring-2 
                     focus:ring-purple-500/50 transition resize-none"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="self-start px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 
                     font-semibold shadow-lg shadow-purple-500/30 hover:from-purple-500 hover:to-pink-400 
                     transition-all duration-300 cursor-pointer disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>

      {/* Contact Info Section with Icons */}
      <div className="relative z-10 mt-16 max-w-3xl mx-auto text-gray-300 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center md:items-start gap-2">
          <Mail className="w-7 h-7 text-purple-400 transition" />
          <h4 className="font-semibold text-white">Email</h4>
          <p className="text-sm">khalidjameel145@gmail.com</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center md:items-start gap-2">
          <Phone className="w-7 h-7 text-purple-400 transition" />
          <h4 className="font-semibold text-white">Phone</h4>
          <p className="text-sm">+91 7054948116</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center md:items-start gap-2">
          <MapPin className="w-7 h-7 text-purple-400 transition" />
          <h4 className="font-semibold text-white">Location</h4>
          <p className="text-sm">Greater Noida, Uttar Pradesh, India</p>
        </motion.div>
      </div>
    </section>
  );
}
