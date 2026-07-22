import { access, readFile } from "node:fs/promises";
import path from "node:path";

const registryPath = path.join(process.cwd(), "src", "content", "assets.ts");
const registry = await readFile(registryPath, "utf8");
const assetPaths = Array.from(
  new Set(registry.match(/\/assets\/[a-z0-9_./-]+/gi) ?? []),
);

const missing = [];
for (const assetPath of assetPaths) {
  try {
    await access(path.join(process.cwd(), "public", assetPath));
  } catch {
    missing.push(assetPath);
  }
}

if (missing.length > 0) {
  console.error("Missing files referenced by src/content/assets.ts:");
  missing.forEach((assetPath) => console.error(`- ${assetPath}`));
  process.exitCode = 1;
} else {
  console.log(`Verified ${assetPaths.length} central public asset path(s).`);
}
