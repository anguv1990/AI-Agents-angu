# The 1-Hour-a-Day AI Roles Plan

**For:** Angu — Principal Engineer → AI Platform Engineering (primary), FDE/SA kept warm
**Budget:** 60 minutes/day, 6 days/week (~6 hrs/week). One rest day — protect it.
**Honest maths:** the original 90-day plan assumed 8–10 hrs/week. At 6 hrs/week the same outcome takes **~20 weeks (5 months)** with scope trimmed to what actually moves hiring decisions. This plan cuts the nice-to-haves, keeps the differentiators.

---

## 0. How to Make 1 Hour Actually Work (the operating system)

One hour dies to context-switching unless you engineer it out. Non-negotiable session structure:

**The 5–45–10 rule**
- **5 min:** open `NEXT.md` in the repo — it tells you exactly where you stopped and the single next task. No thinking, just start.
- **45 min:** build. One task only. If blocked >15 min, ask Claude/your AI assistant, or write the blocker into NEXT.md and move to the fallback task.
- **10 min:** commit (even broken code, on a branch), then rewrite `NEXT.md` with tomorrow's first concrete action ("wire the tool-result back into the messages array", never "continue agent").

**Rules that protect the hour**
1. **Never start a session with setup.** Any environment/install work is its own session, planned in advance.
2. **Every Saturday session is publishing**, not building: README polish, LinkedIn build-log post (5–8 sentences + screenshot), or write-up. Visibility is part of the plan, not extra.
3. **Scope down, never extend time.** If a task doesn't fit in 45 min, split it in NEXT.md.
4. **Use AI aggressively** for boilerplate and debugging — you're learning agent *design*, not typing speed. (Bonus: using an agentic coding tool daily IS agent education.)
5. **Miss a day? Skip it.** Never "catch up" with 2-hour days — that's how streaks die. The plan has slack weeks built in.
6. **Phone-friendly learning is free extra:** commute/queue time = reading MCP spec, Anthropic docs, or others' agent post-mortems. Never counts as your hour.

---

## Phase 1 — Foundations (Weeks 1–9) · four portfolio repos

### Weeks 1–2 · Project A: Agent Loop from Scratch (TypeScript + Ollama)
*Industry expectation covered: tool use & orchestration — the core of every agent JD.*

| Day | Task (45-min sized) |
|---|---|
| 1.1 | Repo + NEXT.md habit + hello-world call to Ollama from TS (fetch to localhost:11434) |
| 1.2 | Define 2 tool schemas (calculator, readFile); prompt model to emit JSON tool calls |
| 1.3 | Parse tool call → execute → append result to messages → loop |
| 1.4 | Termination: "final answer" detection + max-iteration cap |
| 1.5 | Structured logging: every step to console + JSONL file (step, tool, tokens, ms) |
| 1.6 | **Publish:** README with loop diagram + first LinkedIn build-log |
| 2.1 | Add 3rd tool: shell command with allow-list (your first guardrail — say so in README) |
| 2.2 | Token counting + rough cost-per-run metric |
| 2.3 | Swap Ollama → Anthropic API behind one interface (mini LlmChatProvider) |
| 2.4 | Failure handling: malformed JSON retry, tool error fed back to model |
| 2.5 | Try 3 tasks that *break* it; document failures honestly in README |
| 2.6 | **Publish:** "What broke and why" section — recruiters love honest failure analysis |

### Weeks 3–4 · Project B: MCP Server + Client (TypeScript)
*Industry expectation: MCP is now named in platform JDs; also your open-source calling card.*

Week 3: scaffold with official TS SDK (d1) → tool 1 on real data, e.g. portfolio quotes (d2) → tools 2–3 (d3) → connect to Claude Desktop, test (d4) → error handling + input validation with zod (d5) → publish + post (d6).
Week 4: write your own minimal MCP client, wire into Project A's agent (d1–3) → auth/token thinking: note in README how you'd secure this in an enterprise (d4) → polish, npm-publishable structure (d5) → **publish + post** (d6).

### Weeks 5–7 · Project C: Evals Harness in CI (the differentiator)
*Industry expectation: eval-driven development is the loudest gap in the market — every production LLM feature is now expected to have a regression suite.*

Week 5: design 25 golden test cases for Project A's agent (d1–2, this is thinking work — perfect 1-hr sessions) → runner script executes agent against cases (d3–4) → exact-match scorers (d5) → publish (d6).
Week 6: LLM-as-judge scorer using a small local model (d1–2) → score report: pass rate, cost, latency per case (d3) → GitHub Action: evals on every push, fail under threshold (d4–5) → publish (d6).
Week 7: self-host Langfuse via docker-compose (d1) → instrument agent with tracing (d2–3) → **write-up: "Regression-testing a non-deterministic system"** — your flagship article (d4–6). *Slack week if behind.*

### Weeks 8–9 · Project D: Agentic RAG (your Python on-ramp)
*Industry expectation: RAG pipelines named in essentially every AI engineer/platform JD. Python: reading fluency is the goal, not mastery.*

Week 8: Python env + port your agent loop to Python with AI assistance — porting known code is the fastest language on-ramp (d1–3) → chunk + embed a doc set into Chroma (d4–5) → publish (d6).
Week 9: retrieval as a *tool* the agent chooses to call (d1–2) → 15-question retrieval eval, reuse week-5 skills (d3–4) → README comparing agentic vs always-retrieve results (d5) → **publish + post** (d6).

**Phase 1 exit check:** 4 repos, evals in CI, tracing running, Python readable, 6+ public posts.

---

## Phase 2 — Platform Specialisation (Weeks 10–17) · the JD-matching artefact

### Weeks 10–12 · P1: Mini LLM Gateway (NestJS)
*Industry expectation: 2026 platform JDs explicitly name unified/secure/observable gateways over multiple providers.*

Week 10: NestJS service, `/chat` endpoint, provider abstraction over Ollama + Anthropic (d1–4); API-key auth guard (d5); publish (d6).
Week 11: per-key rate limiting (d1) → request logging with tokens + cost per call (d2–3) → response caching (d4–5) → publish (d6).
Week 12: Dockerise (d1) → deploy to Fly.io/Hetzner (d2–3) → point Projects A & D at your own gateway — dogfooding (d4–5) → **post: "I built an LLM gateway"** (d6).

### Weeks 13–14 · P2: Model Routing + Cost Dashboard
*Industry expectation: intelligent routing across providers is a named 2026 platform responsibility — and you've already prototyped the triage idea at work.*

Week 13: rules-based routing, cheap-first with escalation (d1–3) → triage-model dispatcher (d4–5) → publish (d6).
Week 14: per-key budget counters + spend caps (d1–2) → minimal Angular cost dashboard — play to strength, timebox hard (d3–5) → **post with dashboard screenshot** (d6).

### Weeks 15–17 · P3: Guardrail Service + Self-Red-Team
*Industry expectation: prompt firewalls, output filtering, audit APIs as platform components. This is your security brand made public.*

Week 15: input-scanning middleware — injection heuristics + an OSS scanner (d1–4); audit log of blocked events (d5); publish (d6).
Week 16: output validation — JSON schema enforcement, PII regex (d1–3) → red-team script: 20 known injection patterns vs your own gateway (d4–5) → publish (d6).
Week 17: fix what red-team exposed (d1–3) → **write-up: "I attacked my own LLM gateway — results table"** (d4–6). *Slack week if behind.*

**Phase 2 exit check:** one deployed, authenticated, traced, cost-logged, guarded gateway — the single most JD-aligned artefact an AI Platform candidate can own.

---

## Phase 3 — Market Entry (Weeks 18–20)

Week 18: three sanitised war-story one-pagers from OMP — security-first chatbot, intra-cluster Playwright vs egress restrictions, Copilot adoption campaign (2 days each). Serves Platform, FDE **and** SA interviews.
Week 19: CV + LinkedIn rewritten around the narrative — *"Principal engineer who builds governed AI platforms: gateways, routing, guardrails, evals — proven inside a strict-infosec retail enterprise and in the open"* (d1–3); pin repos, add links (d4); draft internal AI Platform charter pitch (d5–6).
Week 20: deliver internal pitch (d1) · apply to 5 external platform/LLMOps roles (d2–3) · request 2 referrals via MCP/AI communities you've been posting in (d4) · book 2 practice interviews (d5) · retro + next-quarter plan (d6).

---

## What Got Cut (deliberately — don't sneak them back in)

- Paved-path template repo (P4) → *after* you're in a platform role or during the internal pitch follow-up
- Angular AI component library → quarter 2, only if Agent Engineer route rises
- FDE speed-drills & multi-framework comparison → only if an FDE interview lands (2 weeks to prep then)
- AI-102 certification → only if targeting Microsoft-partner SA roles
- Deep ML curriculum → stays dead; the literacy layer is absorbed into the projects above (tokens in wk 2, embeddings in wk 8, evals/hallucination in wks 5–7)

## The Two Metrics That Matter

1. **Sessions completed per week** (target 6; ≥4 = on track). Track with a simple habit app or a tally in NEXT.md.
2. **Public artefacts per month** (target: 2 posts + 1 repo milestone).

Not hours studied. Not tutorials watched. Shipped and shown — that's what 1 hour a day compounds into: in 5 months, ~120 focused hours, 5 repos, a deployed platform, and a public narrative most full-time candidates won't have.
