// One Line, One Laugh — make.fun bounty u-plucky-finch-20-one-line-one-laugh-0ffe66ea
// Writes a single original funny line (<= 200 chars) to /output/entry.txt
// and prints it to stdout. Deterministic: no randomness, no network, no clock.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original one-liner. A fitness tracker that praises your
// 10,000 steps, then quietly wonders whether you were running for your life.
const ENTRY =
  "My smartwatch congratulated me on 10,000 steps, then quietly asked if I was being chased.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, mirroring the sealed scorer: the entry must be UTF-8 text of
// 1 to 200 characters and not only whitespace. Fail loudly instead of
// handing the judge an invalid entry.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry is ${charCount} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.error(`wrote ${charCount} characters to ${join(outDir, "entry.txt")}`);
