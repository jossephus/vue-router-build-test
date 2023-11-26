import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import { routes } from "vue-router/auto/routes";
// @ts-ignore
import { setupLayouts } from "virtual:meta-layouts";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: setupLayouts(routes),
});

router.beforeEach(async (to, from) => {
	if (!to.meta.isAuthenticationPage) {
	}
});

export default router;
