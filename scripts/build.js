import { mkdir, readdir, copyFile } from "node:fs/promises";
import path from "node:path";

async function copyDir(src, dest) {
  await mkdir(dest, { recursive: true });
  let entries = await readdir(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

async function build() {
  try {
    await copyDir("src/css", "dist/css");
    console.log("Build completed successfully!");
  } catch (err) {
    console.error("Build failed:", err);
  }
}

build();
