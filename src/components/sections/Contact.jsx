import { useState } from "react";
import { Mail, Send } from "lucide-react";
import Reveal from "../ui/Reveal";
import { saveContactMessage } from "../../lib/firebase";
import { contactEmail } from "../../data/socials";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await saveContactMessage(form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-(--container-tight) mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal direction="right" className="lg:col-span-5">
            <span className="text-azure text-sm font-medium tracking-wide">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Let's build something.
            </h2>
            <p className="text-ink/65 mt-4 max-w-sm">
              Open to full-time roles and freelance work in full-stack web
              development. Send a message and I'll get back to you.
            </p>
            <a
              href={`mailto:${contactEmail}?subject=Hello Muhammad Mubeen!`}
              className="inline-flex items-center gap-2 text-azure font-medium mt-6 hover:underline"
            >
              <Mail size={18} /> {contactEmail}
            </a>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="sm:col-span-1 rounded-xl border border-line bg-paper-dim px-4 py-3 text-sm focus:outline-none focus:border-azure transition-colors"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="sm:col-span-1 rounded-xl border border-line bg-paper-dim px-4 py-3 text-sm focus:outline-none focus:border-azure transition-colors"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Your message"
                className="sm:col-span-2 rounded-xl border border-line bg-paper-dim px-4 py-3 text-sm focus:outline-none focus:border-azure transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-azure text-white px-5 py-3 text-sm font-medium hover:bg-azure-light transition-colors duration-300 disabled:opacity-60"
              >
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              {status === "sent" && (
                <p className="sm:col-span-2 text-sm text-azure">
                  Message sent thanks, I'll reply soon.
                </p>
              )}
              {status === "error" && (
                <p className="sm:col-span-2 text-sm text-red-600">
                  Something went wrong. Try again or email me directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
