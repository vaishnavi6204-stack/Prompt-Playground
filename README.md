Prompt Playground

A React application for testing, comparing, and iterating on AI prompts through structured version tracking. Write a prompt, review the response, refine it, and save each iteration with notes explaining what changed and why.

---

Why I Built This

Most prompt writing is treated as one-shot guessing. I built Prompt Playground to make prompt engineering a repeatable process: write a prompt, evaluate the response, identify weaknesses, refine the prompt, and compare iterations to understand what improved.

---

Features

- Write and test AI prompts
- Save prompt versions with revision notes
- Compare prompt iterations
- View prompt history
- Claude API integration prepared
- Placeholder responses for local development

---

Tech Stack

- React (Vite)
- CSS
- React Hooks
- Claude API (Anthropic)

---

Current Status

- User interface is complete and fully functional.
- Prompt version history and revision notes are implemented.
- Claude API integration has been prepared.
- The application currently uses placeholder responses while awaiting API credits for live testing.

---

Getting Started

npm install
npm run dev

---

What I Learned

While testing a prompt that converted messy notes into a to-do list, I found that the model assumed the current day was Friday because the prompt lacked explicit temporal context. This reinforced an important lesson in prompt engineering: when important information is missing, language models may infer it instead of asking for clarification. Better prompts provide the context needed to reduce incorrect assumptions.

---

What's Next

- Connect live Claude API responses once API credits are available.
- Test and document additional prompt iteration examples.
- Add support for editing and deleting saved prompt versions.
- Explore support for multiple AI models.

---

Author

Vaishnavi Pathak
