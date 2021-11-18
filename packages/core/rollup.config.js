import path from "path";
import esbuild from 'rollup-plugin-esbuild'
import dts from "rollup-plugin-dts";
// import resolve from "rollup-plugin-node-resolve";

const inputPath = path.resolve(__dirname, "./lib/index.ts");
const outputUmdPath = path.resolve(__dirname, "./dist/index.js");

const iifeGlobals = {
  "vue-demi": "VueDemi",
  vue: "Vue",
};

export default [
  {
    input: inputPath,
    output: {
      file: outputUmdPath,
      format: "es",
      globals: iifeGlobals,
    },
    plugins: [esbuild()],
    external: ["vue", "vue-demi"],
  },
  {
    input: inputPath,
    output: {
      file: path.resolve(__dirname, "./dist/index.d.ts"),
      format: "es",
    },
    plugins: [dts()],
    external: ["vue", "vue-demi"],
  },
];
