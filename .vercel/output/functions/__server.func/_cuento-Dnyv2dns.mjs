import { S as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-DGJ0HlJn.mjs";
import { t as ColoringBook } from "./_ssr/coloring-book-DsAADyxl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_cuento-Dnyv2dns.js
var import_jsx_runtime = require_jsx_runtime();
function CuentoPage() {
	const { cuento } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColoringBook, { storyId: cuento });
}
//#endregion
export { CuentoPage as component };
