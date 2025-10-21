import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    toast.success("Message sent");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form
      id="contact"
      onSubmit={handleSubmit}
      className="flex flex-col items-center text-sm mt-16"
    >
      <p className="text-primary font-bold pb-2 dynamic-font text-4xl">contact us</p>
      <h1 className="text-4xl md:text-5xl font-semibold text-slate-700 pb-4 text-center">
        Get in touch with us
      </h1>
      <p className="text-gray-500 text-center pb-10 font-light text-lg">
        Our service allows you to hide your geolocation, bypass blocking and protect your data.
        <br className="hidden md:block" /> Join over 150 thousand people who trust us to keep their life safe.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
        <div className="w-full">
          <label className="text-primary" htmlFor="name">Your Name</label>
          <input
            className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <label className="text-primary" htmlFor="email">Your Email</label>
          <input
            className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mt-6 w-[350px] md:w-[700px]">
        <label className="text-primary" htmlFor="message">Message</label>
        <textarea
          className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="mt-5 bg-primary text-white h-16 w-56 px-4 cursor-pointer rounded active:scale-95 transition text-xl">Send Message
      </button>
    </form>
  );
};

export default Contact;
