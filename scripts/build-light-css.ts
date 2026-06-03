import { compile, compileString } from "sass";
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const lightDir = join(rootDir, "src/styles/modes/light");
const outDir = join(rootDir, "src/styles/modes/light-css");
const loadPaths = [join(rootDir, "src/styles/modes"), join(rootDir, "node_modules")];

const sassOptions = {
  loadPaths,
  style: "expanded" as const,
};

function extractModeLightRules(css: string, layerName: string): string {
  const blocks: string[] = [];
  const ruleRegex = /\.t-mode-light\s+[^{]+\{[^}]*\}/g;

  for (const match of css.matchAll(ruleRegex)) {
    let block = match[0];

    // sass-layer emits `.t-layer-light` for layer root config under light mode.
    if (layerName === "checkbox") {
      block = block.replace(".t-layer-light", ".t-layer-checkbox");
    }

    blocks.push(block);
  }

  return `${blocks.join("\n\n")}\n`;
}

function compilePaletteCss(): string {
  const entryPath = join(rootDir, "scripts/_palette-entry.scss");
  return compile(entryPath, sassOptions).css.replace(/\n\/\*# sourceMappingURL=.*?\*\/\n?$/, "\n");
}

function compileLayerCss(layerName: string): string {
  const scss = `
@use "light/${layerName}" as layer;
@use "@toife/sass-layer" with (
  $shape-pill-border-radius: 2rem,
  $modes: (
    "light": (
      "${layerName}": layer.$config,
    ),
  ),
);
@use "@toife/sass-layer/generators/theme" as theme;

@include theme.generate();
`;

  const css = compileString(scss, sassOptions).css;
  return extractModeLightRules(css, layerName);
}

function collectLayerNames(): string[] {
  return readdirSync(lightDir)
    .filter((name) => name.startsWith("_") && name.endsWith(".scss") && name !== "_index.scss")
    .map((name) => name.slice(1, -".scss".length))
    .sort();
}

function orderedLayerNames(): string[] {
  const indexPath = join(lightDir, "_index.scss");
  const indexSource = readFileSync(indexPath, "utf8");
  const ordered: string[] = [];

  for (const match of indexSource.matchAll(/@use\s+"([^"]+)"/g)) {
    const layerName = match[1]!;
    if (layerName !== "index") {
      ordered.push(layerName);
    }
  }

  const discovered = collectLayerNames();
  const missing = discovered.filter((name) => !ordered.includes(name));

  return [...ordered, ...missing.sort()];
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

writeFileSync(join(outDir, "root.css"), compilePaletteCss(), "utf8");

const layerNames = orderedLayerNames();
const imports = ['@import "./root.css";'];

for (const layerName of layerNames) {
  const css = compileLayerCss(layerName);
  writeFileSync(join(outDir, `${layerName}.css`), css, "utf8");
  imports.push(`@import "./${layerName}.css";`);
}

writeFileSync(
  join(outDir, "index.css"),
  `${imports.join("\n")}\n`,
  "utf8",
);

console.log(`Built light CSS for ${layerNames.length} layers in ${outDir}.`);
