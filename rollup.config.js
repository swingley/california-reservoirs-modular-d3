import npm from "rollup-plugin-node-resolve";

export default {
  entry: "index.js",
  format: "iife",
  moduleName: "d3",
  plugins: [npm({jsnext: true})],
  dest: "d3.rollup.js"
};
