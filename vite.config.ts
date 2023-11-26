import { fileURLToPath, URL } from "node:url";
import VueRouter from "unplugin-vue-router/vite";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import MetaLayouts from "vite-plugin-vue-meta-layouts";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		VueRouter({
			extensions: [".page.vue"],
		}),
		vue(),
		vueJsx(),
		MetaLayouts({
			target: "src/layouts", // Layout directory, default src/layouts
			defaultLayout: "default", // Default layout, which defaults to default
			importMode: "sync", // Load mode, support sync and async. The default is automatic processing, sync for SSGs, and async for non-SSGs
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
