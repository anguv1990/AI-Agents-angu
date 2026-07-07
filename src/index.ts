import chat from "./llm.js";

async function main() {
  const reply = await chat([
    { role: "user", content: "Give me a startup name for a dental AI company" },
  ]);
  console.log(reply);
}

main();