// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-case-case-js": () => import("./../src/pages/case/case.js" /* webpackChunkName: "component---src-pages-case-case-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

