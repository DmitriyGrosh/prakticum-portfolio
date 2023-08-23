import RoutingApp from "./RoutingApp.vue";

import { Home } from "./Home";
import { Video } from "./Video";
import { JavaScriptFeature } from "./JavaScriptFeatue";

export const routes = [
	{ path: '/home', component: Home },
	{ path: '/video', component: Video },
	{ path: '/meme', component: JavaScriptFeature },
	{ path: '/', redirect: '/home' }

];

export { RoutingApp };
