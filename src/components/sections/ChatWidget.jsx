import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { saveChatMessage } from "../../lib/firebase";

const SYSTEM_CONTEXT =
  "You are a helpful assistant on Mubeen's portfolio website. Mubeen is a full-stack web developer and founder of Mubix Labs, a software house. He studies BSCS at Bahria University Islamabad. Answer visitor questions about his work briefly and helpfully.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! Ask me anything about Mubeen's work." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    saveChatMessage(userMsg).catch(() => {});

    try {
      const res = await fetch(
        "https://cold-boat-8d18.mr-mu10v.workers.dev/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `${SYSTEM_CONTEXT}\n\nVisitor: ${text}`,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }

      const data = await res.json();
      const reply = data.reply || "Sorry, I couldn't process that. Please try again.";

      const botMsg = { role: "assistant", text: reply };
      setMessages((m) => [...m, botMsg]);
      saveChatMessage(botMsg).catch(() => {});
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "Sorry, something went wrong. Please try again or use contact form." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div
          ref={panelRef}
          className="mb-3 w-[88vw] max-w-sm h-[28rem] rounded-2xl border border-line bg-paper shadow-2xl flex flex-col overflow-hidden"
        >
          <div className="bg-ink text-white px-4 py-3 flex items-center justify-between">
            <span className="font-display font-bold text-sm">Ask AI Assistant</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] text-sm rounded-xl px-3 py-2 ${
                  m.role === "user"
                    ? "bg-azure text-white ml-auto"
                    : "bg-paper-dim text-ink"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="bg-paper-dim text-ink/50 text-sm rounded-xl px-3 py-2 w-fit">
                Typing...
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form onSubmit={sendMessage} className="border-t border-line p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 text-sm rounded-lg border border-line px-3 py-2 focus:outline-none focus:border-azure"
            />
            <button
              type="submit"
              aria-label="Send"
              className="rounded-lg bg-azure text-white px-3 hover:bg-azure-light transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        ref={toggleRef}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="w-14 h-14 rounded-full bg-azure text-white flex items-center justify-center shadow-lg shadow-azure/30 hover:bg-azure-light hover:-translate-y-0.5 transition-all duration-300"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}