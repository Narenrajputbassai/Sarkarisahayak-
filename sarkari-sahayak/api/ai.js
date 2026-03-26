export default function handler(req, res) {
  const { question } = req.body;
  const schemes = require('../data/schemes.json');

  const filtered = schemes.filter(s =>
    question.toLowerCase().includes(s.category.toLowerCase()) ||
    question.toLowerCase().includes(s.state.toLowerCase())
  );

  if (filtered.length === 0) {
    return res.json({ answer: "Koi matching scheme nahi mili" });
  }

  const answer = filtered.map(s =>
    `${s.name} (${s.state}) - ${s.benefit}`
  ).join("\n");

  res.json({ answer });
}