const terser = require('@rollup/plugin-terser')
const babel = require('@rollup/plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    // terser(),
    commonjs(),
    babel.getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-proposal-optional-chaining']
      ]
    })
  ]
}