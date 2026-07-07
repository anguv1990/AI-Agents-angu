# NEXT

## Current status
- Day 1.1 is mostly in place: [src/index.ts](/Users/angumanikandan/AI-Agents-hands-on/src/index.ts) calls the model through [src/llm.ts](/Users/angumanikandan/AI-Agents-hands-on/src/llm.ts).
- The next check is to confirm Ollama is running locally and that the model responds end-to-end.

## Next session
1. Run `npm run dev`.
2. If the request fails, start Ollama and pull the model used in `src/llm.ts`.
3. Once the hello-world call works, begin Day 1.2:
   define two tool schemas (`calculator`, `readFile`) and prompt the model to return JSON tool calls.

## First concrete action for tomorrow
Wire a `tools` array into the prompt and make the assistant answer with a JSON object for either `final_answer` or `tool_call`.
