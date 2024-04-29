/* 
Copyright 2024 sby1ce

SPDX-License-Identifier: CC0-1.0 
*/

import { defineConfig } from "@solidjs/start/config";
import { resolve } from "path";

const release: boolean = process.argv.includes("--release");
const publicUrl: string =
  import.meta?.env?.BASE_URL ?? release ? resolve("public") : resolve(".");

export default defineConfig({
  ssr: true,
  server: {
    preset: "static",
    baseURL: process.env.BASE_PATH,
  },
  vite: {
    resolve: {
      alias: {
        $public: publicUrl,
      },
    },
  },
});
