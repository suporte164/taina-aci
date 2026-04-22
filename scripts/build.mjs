import { spawnSync } from "node:child_process";

const shouldUseCloudflareBuild =
  process.env.CI === "true" ||
  Boolean(process.env.CF_PAGES) ||
  Boolean(process.env.CLOUDFLARE_ACCOUNT_ID);

const command = shouldUseCloudflareBuild ? "opennextjs-cloudflare" : "next";
const args = shouldUseCloudflareBuild ? ["build"] : ["build"];

const result = spawnSync(command, args, {
  stdio: "inherit",
  shell: process.platform === "win32",
});

if (typeof result.status === "number") {
  process.exit(result.status);
}

process.exit(1);
