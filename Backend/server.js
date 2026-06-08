const express = require("express");
const cors = require("cors");
const knowledgeBase = require("./data");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const message = req.body?.message;

  if (!message) {
    return res.json({ reply: "Please enter a message." });
  }

  const query = message.toLowerCase().trim();

  // ✅ GREETINGS
  if (["hi", "hello", "hey"].includes(query)) {
    return res.json({
      reply:
        "Hello! I'm Aditya AI 👋\nAsk me about skills, projects, achievements, hobbies, experience or contact.",
    });
  }

  // ✅ ABOUT
  if (query.includes("about") || query.includes("who are you")) {
    return res.json({ reply: knowledgeBase.about });
  }

  // ✅ SKILLS
  if (
    query.includes("skill") ||
    query.includes("skills") ||
    query.includes("tech stack")
  ) {
    return res.json({ reply: knowledgeBase.skills });
  }

  // ✅ PROJECTS
  if (query.includes("project")) {
    return res.json({ reply: knowledgeBase.projects });
  }

  // ✅ EXPERIENCE
  if (query.includes("experience")) {
    return res.json({ reply: knowledgeBase.experience });
  }

  // ✅ ACHIEVEMENTS
  if (
    query.includes("achievement") ||
    query.includes("certificate")
  ) {
    return res.json({ reply: knowledgeBase.achievements });
  }

  // ✅ HOBBIES
  if (query.includes("hobby") || query.includes("hobbies")) {
    return res.json({ reply: knowledgeBase.hobbies });
  }

  // ✅ CONTACT
  if (query.includes("contact")) {
    return res.json({ reply: knowledgeBase.contact });
  }

  // ❌ DEFAULT
  return res.json({
    reply:
      "I can only answer questions about Aditya Sharma's portfolio. Try: skills, projects, hobbies, experience.",
  });
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});