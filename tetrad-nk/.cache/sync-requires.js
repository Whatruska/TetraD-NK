const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-case-case-js": hot(preferDefault(require("/home/whatruska/WebstormProjects/TetraD-NK/tetrad-nk/src/pages/case/case.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/whatruska/WebstormProjects/TetraD-NK/tetrad-nk/src/pages/index.js")))
}

