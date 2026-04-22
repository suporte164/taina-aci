import { spawnSync } from "node:child_process";

const shouldUseCloudflareBuild =
  process.env.CI === "true" ||
  Boolean(process.env.CF_PAGES) ||
  process.env.OPENNEXT_CLOUDFLARE_BUILD === "1";

// Prevent recursive loops:
// opennextjs-cloudflare build invokes "pnpm build" internally.
// Mark the first invocation and force the nested one to run "next build".
const isNestedCloudflareBuild = process.env.OPENNEXT_WRAP_PHASE === "next-build";
const shouldRunOpenNext = shouldUseCloudflareBuild && !isNestedCloudflareBuild;

const command = shouldRunOpenNext ? "opennextjs-cloudflare" : "next";
const args = shouldUseCloudflareBuild ? ["build"] : ["build"];

const result = spawnSync(command, args, {
  stdio: "inherit",
  shell: process.platform === "win32",
  env: {
    ...process.env,
    OPENNEXT_WRAP_PHASE: "next-build",
  },
});

if (typeof result.status === "number") {
  process.exit(result.status);
}

process.exit(1);
