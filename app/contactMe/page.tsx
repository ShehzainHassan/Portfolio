"use client";

import { Button, IconCard } from "@/components";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import classes from "./ContactMe.module.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
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

          <div className={classes.contactInfoItem}>
            <IconCard icon={<FaEnvelope />} />
            <div className={classes.contactInfoTitleContainer}>
              <p className={classes.contactInfoTitle}>Email</p>
              <a
                href="mailto:shehzainhassan@gmail.com"
                className={classes.contactInfoItemValue}>
                shehzainhassan@gmail.com
              </a>
            </div>
          </div>

          <div className={classes.contactInfoItem}>
            <IconCard icon={<FaGithub />} />
            <div className={classes.contactInfoTitleContainer}>
              <p className={classes.contactInfoTitle}>GitHub</p>
              <a
                href="https://github.com/ShehzainHassan"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.contactInfoItemValue}>
                GitHub Profile
              </a>
            </div>
          </div>

          <div className={classes.contactInfoItem}>
            <IconCard icon={<FaLinkedin />} />
            <div className={classes.contactInfoTitleContainer}>
              <p className={classes.contactInfoTitle}>LinkedIn</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/shehzain-hassan/"
                className={classes.contactInfoItemValue}>
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className={classes.contactInfoItem}>
            <IconCard icon={<FaMapMarkerAlt />} />
            <div className={classes.contactInfoTitleContainer}>
              <p className={classes.contactInfoTitle}>Location</p>
              <p className={classes.contactInfoItemValue}>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <form className={classes.contactForm} onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor="name" className={classes.label}>
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className={classes.input}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="email" className={classes.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className={classes.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="subject" className={classes.label}>
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Your Subject"
              className={classes.input}
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="message" className={classes.label}>
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className={classes.textArea}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" disabled={!isFormValid || loading}>
            Send Message
          </Button>
        </form>
      </div>

      <ToastContainer position="bottom-right" />
    </section>
  );
}
