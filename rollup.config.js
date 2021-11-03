import { uglify } from 'rollup-plugin-uglify'
// console.log("process", process.env)

export default {
  input: './src/index.js',
  output: {
    file: './dist/js/index.js',
    format: 'umd',
    name: 'diff-html-content'
  },
  plugins: [
    (process.env.NODE_ENV === 'prod' && uglify())
  ]
}