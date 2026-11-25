import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Laugh-Off v2 — sharper joke: a dog that opens the fridge
// flips the owner/renter roles in the last words.
const joke =
  "My dog learned to open the fridge, so now I pay rent to live in his kitchen.";

// Gate: entry.txt must be UTF-8 text, 1-200 chars, a single line.
// Write exactly the joke, no trailing newline, so the file holds
// exactly 76 characters on one line.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
