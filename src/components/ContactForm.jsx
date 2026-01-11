import { useState } from "react";
import { sendContactForm } from "../api/contact";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await sendContactForm(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        required
      />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send"}
      </button>

      {status === "success" && <p>Message sent!</p>}
      {status === "error" && <p>Something went wrong.</p>}
    </form>
  );
}
