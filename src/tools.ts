export const toolDefinitions = `
You have access to these tools:

1. calculator — evaluates a math expression.
   args: { "expression": string }   e.g. {"expression": "23 * 7 + 1"}

2. read_file — reads a text file from the current project directory.
   args: { "path": string }         e.g. {"path": "package.json"}

RULES:
- If you need a tool, reply with ONLY this JSON, nothing else:
  {"tool": "<name>", "args": {...}}
- If you can answer without tools, reply with ONLY:
  {"final": "<your answer>"}
`;