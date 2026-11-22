// main.ts — bring-the-humans-03 entry.
// Copies VIDEO.json from the repository to /output. The house reads the
// video itself from TikTok; nothing this program writes about it counts.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const input = process.env.MAKEFUN_INPUT_DIR ?? '.';
const output = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(output, { recursive: true });
copyFileSync(join(input, 'VIDEO.json'), join(output, 'VIDEO.json'));
