import Button from "../Button/Button";
import IconCard from "../IconCard/IconCard";
import classes from "./ContactMe.module.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactMe() {
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
        {/* Contact Info */}
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
            <IconCard icon={<FaPhoneAlt />} />
            <div className={classes.contactInfoTitleContainer}>
              <p className={classes.contactInfoTitle}>Phone</p>
              <a
                href="tel:+15551234567"
                className={classes.contactInfoItemValue}>
                +1 (555) 123‑4567
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

        {/* Contact Form */}
        <form className={classes.contactForm}>
          <div className={classes.formGroup}>
            <label htmlFor="name" className={classes.label}>
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className={classes.input}
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
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="message" className={classes.label}>
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className={classes.textArea}></textarea>
          </div>

          <Button>Send Message</Button>
        </form>
      </div>
    </section>
  );
}
