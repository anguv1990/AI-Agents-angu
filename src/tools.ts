export const toolDefinitions = `
You have access to these tools:

1. calculator — evaluates a math expression.
   args: { "expression": string }   e.g. {"expression": "23 * 7 + 1"}

2. read_file — reads a text file from the current project directory.
   args: { "path": string }         e.g. {"path": "package.json"}

RULES:
- Make ONE tool call per reply. Never send more than one JSON object.
  If a task needs multiple tools, call them one at a time across turns —
  you'll receive each result before deciding your next step.
- If you need a tool, reply with ONLY this JSON, nothing else:
  {"tool": "<name>", "args": {...}}
- If you can answer without tools, reply with ONLY:
  {"final": "<your answer>"}
- No explanations. No markdown. Raw JSON only.
`;