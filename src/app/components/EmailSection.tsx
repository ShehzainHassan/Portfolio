"use client";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";
import { useState } from "react";

export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transfrom -translate-x-1/2 -translate-y-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new oppportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linked Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block  mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="john@example.com"></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Just saying hi"></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353f] placeholder-[#9CA2A9]  text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about"></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
