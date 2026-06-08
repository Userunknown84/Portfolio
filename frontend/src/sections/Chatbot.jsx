import React, { useState, useRef, useEffect } from "react";
import { Bot, Send, X, MessageCircle } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });
      console.log(API_URL);
console.log(`${API_URL}/chat`);

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            data.reply ||
            "Sorry, I couldn't find an answer for that.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Unable to connect to the server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating Robot */}
      {!isOpen && (
        <div className="absolute bottom-20 right-0 flex flex-col items-center animate-bounce">
          <div className="glass px-4 py-3 rounded-2xl border border-primary/20 mb-3 shadow-lg whitespace-nowrap">
            <p className="text-sm font-semibold text-primary">
              Aditya AI
            </p>

            <p className="text-xs text-muted-foreground">
              Ask me anything 👋
            </p>
          </div>

          <div
            className="
              w-14 h-14
              rounded-full
              bg-primary/20
              border border-primary/30
              flex items-center justify-center
              shadow-[0_0_25px_rgba(32,178,166,0.5)]
            "
          >
            <Bot className="w-8 h-8 text-primary" />
          </div>
        </div>
      )}

      {/* Chat Window */}
      <div
        className={`absolute bottom-20 right-0 w-[90vw] max-w-sm transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-5 invisible"
        }`}
      >
        <div className="glass rounded-3xl border border-primary/20 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-primary/20">
            <div className="flex items-center gap-3">
              <Bot className="text-primary" />

              <div>
                <h3 className="font-semibold text-white">
                  Aditya AI
                </h3>

                <p className="text-xs text-muted-foreground">
                  Portfolio Assistant
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-primary transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-sm text-muted-foreground mt-20">
                Ask me about skills, projects, experience,
                achievements or hobbies.
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[80%] whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-2xl bg-white/10 text-white">
                  Typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-primary/20 p-3 flex gap-2">
            <input
              type="text"
              placeholder="Ask Aditya AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }
              className="
                flex-1
                px-4 py-2
                rounded-xl
                bg-white/10
                text-white
                outline-none
                border border-primary/10
                placeholder:text-gray-400
              "
            />

            <button
              disabled={loading}
              onClick={handleSend}
              className="
                bg-primary
                text-white
                p-3
                rounded-xl
                hover:opacity-90
                disabled:opacity-50
                transition
              "
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send size={18} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-16 h-16
          rounded-full
          bg-primary
          flex items-center justify-center
          shadow-[0_0_30px_rgba(32,178,166,0.6)]
          hover:scale-110
          transition-all duration-300
        "
      >
        <MessageCircle className="text-white w-8 h-8" />
      </button>
    </div>
  );
}