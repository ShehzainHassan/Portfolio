"use client";

import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import ContactInfoItem from "@/components/ui/ContactInfoItem";
import InputField from "@/components/ui/InputField";

import classes from "./ContactMe.module.css";
import { Button, LoadingSpinner } from "@/components";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/contact", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    formData.name.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.subject.trim() &&
    formData.message.trim();

  return (
    <section id="contact" className={classes.contactMe}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Get in Touch</h1>
        <p className={classes.description}>
          Have a project in mind or just want to say hi? I&apos;d love to hear
          from you.
        </p>
      </div>

      <div className={classes.contactContainer}>
        <div className={classes.contactInfo}>
          <h2 className={classes.contactInfoHeader}>Contact Information</h2>

          <ContactInfoItem
            icon={<FaEnvelope />}
            label="Email"
            value="shehzainhassan@gmail.com"
            href="mailto:shehzainhassan@gmail.com"
          />
          <ContactInfoItem
            icon={<FaGithub />}
            label="GitHub"
            value="GitHub Profile"
            href="https://github.com/ShehzainHassan"
          />
          <ContactInfoItem
            icon={<FaLinkedin />}
            label="LinkedIn"
            value="LinkedIn Profile"
            href="https://www.linkedin.com/in/shehzain-hassan/"
          />
          <ContactInfoItem
            icon={<FaMapMarkerAlt />}
            label="Location"
            value="Lahore, Pakistan"
          />
        </div>

        <form className={classes.contactForm} onSubmit={handleSubmit}>
          <InputField
            id="name"
            label="Name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            id="subject"
            label="Subject"
            placeholder="Your Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <InputField
            id="message"
            label="Message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            textarea
            required
          />

          <Button type="submit" disabled={!isFormValid || loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>

      <ToastContainer position="bottom-right" />
    </section>
  );
}
