import { defineConfig } from 'vite'
import React from "@vitejs/plugin-react"

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/WEB-PROFILE-REZA/',
  plugins: [React(), tailwindcss()],
})