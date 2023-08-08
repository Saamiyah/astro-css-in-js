import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { g as deserializeManifest } from './chunks/astro.13965cd5.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'react';
import 'react-dom/server';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index.20cb2cd0.mjs');
const _page1  = () => import('./chunks/index@_@ts.87bd8fd6.mjs');
const _page2  = () => import('./chunks/index@_@astro.dd830ad9.mjs');
const _page3  = () => import('./chunks/_id_@_@astro.3308f951.mjs');
const _page4  = () => import('./chunks/_id_@_@astro.03e9e931.mjs');
const _page5  = () => import('./chunks/pandaStyles@_@ts.008c55f6.mjs');
const _page6  = () => import('./chunks/styles@_@ts.6c979321.mjs');const pageMap = new Map([["src/pages/index.styles.ts", _page0],["src/pages/index.ts", _page1],["src/pages/index.astro", _page2],["src/pages/article/[id].astro", _page3],["src/pages/report/[id].astro", _page4],["src/pages/shared/pandaStyles.ts", _page5],["src/pages/shared/styles.ts", _page6]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/index.styles","type":"endpoint","pattern":"^\\/index\\.styles$","segments":[[{"content":"index.styles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/index.styles.ts","pathname":"/index.styles","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"endpoint","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.ts","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.3c2f71c4.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/article/[id]","type":"page","pattern":"^\\/article\\/([^/]+?)\\/?$","segments":[[{"content":"article","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/article/[id].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/report/[id]","type":"page","pattern":"^\\/report\\/([^/]+?)\\/?$","segments":[[{"content":"report","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/report/[id].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/shared/pandastyles","type":"endpoint","pattern":"^\\/shared\\/pandaStyles$","segments":[[{"content":"shared","dynamic":false,"spread":false}],[{"content":"pandaStyles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shared/pandaStyles.ts","pathname":"/shared/pandaStyles","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/shared/styles","type":"endpoint","pattern":"^\\/shared\\/styles$","segments":[[{"content":"shared","dynamic":false,"spread":false}],[{"content":"styles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shared/styles.ts","pathname":"/shared/styles","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/Users/saamiyah/Projects/component-library/astro-styled-components/fast-filament/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.styles.ts":"chunks/pages/index.styles.ts.4ed993c7.mjs","/src/pages/index.ts":"chunks/pages/index.ts.127be7ad.mjs","/src/pages/shared/pandaStyles.ts":"chunks/pages/pandaStyles.ts.8b2e6b3a.mjs","/src/pages/shared/styles.ts":"chunks/pages/styles.ts.4ed993c7.mjs","\u0000@astro-page:src/pages/index.styles@_@ts":"chunks/index.20cb2cd0.mjs","\u0000@astro-page:src/pages/index@_@ts":"chunks/index@_@ts.87bd8fd6.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.dd830ad9.mjs","\u0000@astro-page:src/pages/article/[id]@_@astro":"chunks/_id_@_@astro.3308f951.mjs","\u0000@astro-page:src/pages/report/[id]@_@astro":"chunks/_id_@_@astro.03e9e931.mjs","\u0000@astro-page:src/pages/shared/pandaStyles@_@ts":"chunks/pandaStyles@_@ts.008c55f6.mjs","\u0000@astro-page:src/pages/shared/styles@_@ts":"chunks/styles@_@ts.6c979321.mjs","@astrojs/react/client.js":"_astro/client.c67de31f.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.3c2f71c4.css","/favicon.svg","/_astro/client.c67de31f.js"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
