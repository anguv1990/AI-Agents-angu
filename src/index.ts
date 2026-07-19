import { runAgent } from "./agents.js";

async function main() {
  // const reply = await chat([
  //   { role: "system", content: toolDefinitions },
  //   { role: "user", content: "What's in my package.json?" },
  // ]);

  const answer = await runAgent(
    "What is 87 * 45, and what is the name field in package.json?"
  );
  console.log(`\nFINAL ANSWER: ${answer}`);
  console.log(answer);
}

main();