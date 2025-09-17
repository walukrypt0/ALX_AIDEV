# my-agent

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.22. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

## System Prompt (prompt.ts)

The `prompt.ts` file exports a `SYSTEM_PROMPT` constant which defines the system prompt used by the AI agent. This prompt configures the AI as an expert code reviewer with a focus on providing clear, constructive, and actionable feedback on code changes. It outlines the AI's personality, review approach, focus areas, and tone to ensure high-quality and helpful code reviews.
