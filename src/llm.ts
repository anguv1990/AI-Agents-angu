export type Message = { role: "system" | "user" | "assistant"; content: string };

async function chat(messages: Message[]): Promise<string> {
  const res = await fetch("http://localhost:11434/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "qwen2.5:7b",
      messages,
      stream: false,
      options: { temperature: 1 },
    }),
  });
  const data = await res.json();
  return data.message.content;
}

export default chat;