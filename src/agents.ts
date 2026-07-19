import chat from "./llm.js";
import type { Message } from "./llm.js";
import { toolDefinitions } from "./tools.js";
import { readFileSync } from "node:fs";

function runTool(name: string, args: any): string {
  if (name === "calculator") {
    // eval is OK for a local learning lab — we replace it on Day 8
    return String(eval(args.expression));
  }
  if (name === "read_file") {
    return readFileSync(args.path, "utf-8").slice(0, 2000);
  }
  return `Unknown tool: ${name}`;
}

export async function runAgent(task: string): Promise<string> {
  const messages: Message[] = [
    { role: "system", content: toolDefinitions },
    { role: "user", content: task },
  ];

  for (let step = 1; step <= 10; step++) {
    const reply = await chat(messages);
    console.log(`\n[step ${step}] model said:\n${reply}`);

    let parsed;
    try {
      // Model sometimes sends multiple JSON objects — take the first line only
      if (!reply) return `Model returned empty reply`;
      const firstJson = reply.trim().split("\n")[0] ?? "";
      parsed = JSON.parse(firstJson);
    } catch {
      return `Model returned non-JSON: ${reply}`;
    }

    if (parsed.final) return parsed.final;

    const result = runTool(parsed.tool, parsed.args);
    console.log(`[step ${step}] tool result: ${result.slice(0, 200)}`);

    // messages.push({ role: "assistant", content: reply });
    // messages.push({ role: "user", content: `Tool result: ${result}` });

    // Record only the ONE call we actually executed — not the full multi-call reply
    messages.push({ role: "assistant", content: JSON.stringify(parsed) });
    // Label whose result this is
    messages.push({ role: "user", content: `Tool result for ${parsed.tool}: ${result}` });
  }
  return "Stopped: hit max steps.";
}