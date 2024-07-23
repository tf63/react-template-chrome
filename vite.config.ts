import { crx, defineManifest } from "@crxjs/vite-plugin"
import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc' // crxjs does not support react-swc yet
import react from '@vitejs/plugin-react'


const manifest = defineManifest({
    manifest_version: 3,
    name: "My Extension",
    version: "1.0.0",
    permissions: ["bookmarks"],
    action: {
      default_popup: "index.html",
    },
  });

export default defineConfig({
    plugins: [react(), crx({ manifest })],
    server: {
        host: true
    }
});

