import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Gate: entry.txt must be UTF-8 text of 1-200 characters, not whitespace-only.
// This joke is a single line of 112 characters, so it passes the gate as-is.
const JOKE =
  "I bought a standing desk to get healthier, but now I just stand completely still and snack at a higher altitude.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE, "utf8");
