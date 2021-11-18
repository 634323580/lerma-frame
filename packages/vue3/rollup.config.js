const path = require('path')
// 打包外部模块代码
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const vuePlugin = require('rollup-plugin-vue')
// 识别打包css
const postcss = require('rollup-plugin-postcss')


const inputPath = path.resolve(__dirname, './lib/index.js')
const outputEsPath = path.resolve(__dirname, './dist/index.js')

const iifeGlobals = {
  vue: "Vue",
};

module.exports = {
  input: inputPath,
  output: [{
    file: outputEsPath,
    format: 'es',
    globals: iifeGlobals
  }],
  plugins: [
    // resolve(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [[
        '@babel/transform-runtime', {
          "regenerator": true,
        }
      ]]
    }),
    vuePlugin(),
    postcss({
      plugins: []
    })
  ],
  // 不打包vue，声明vue为外部模块
  external: ["vue", "@lerna-frame/core"]
}
