import chat from "./llm.js";

import { toolDefinitions } from "./tools.js";

async function main() {
  const reply = await chat([
    { role: "system", content: toolDefinitions },
    { role: "user", content: "What's in my package.json?" },
  ]);
  console.log(reply);
}

main();