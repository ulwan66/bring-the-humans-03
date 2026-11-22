// main.ts — bring-the-humans-03 entry.
// Copies VIDEO.json from the repository (the directory this file lives in)
// to /output. The house reads the video itself from TikTok; nothing this
// program writes about it counts. VIDEO.json is resolved next to this file,
// not from the working directory, because the grader runs it from elsewhere.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const output = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(output, { recursive: true });
copyFileSync(join(here, 'VIDEO.json'), join(output, 'VIDEO.json'));
