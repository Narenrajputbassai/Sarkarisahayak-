async function askAI() {
  const question = document.getElementById("question").value;

  const res = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question })
  });

  const data = await res.json();

  document.getElementById("result").innerText =
    data.answer || "No result";
}