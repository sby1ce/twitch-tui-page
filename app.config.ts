/* 
Copyright 2024 sby1ce

SPDX-License-Identifier: CC0-1.0 
*/

import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  ssr: true,
  server: {
    preset: "static",
    baseURL: process.env.BASE_PATH,
  },
});
