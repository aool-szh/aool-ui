import babel from "@rollup/plugin-babel"
import vuePlugin from 'rollup-plugin-vue'

const es = {
  input: "src/entry.js",
  output: {
    file: "dist/index.bundle.js",
    name: "AoolUI",
    format: "es",
    globals: {
      vue: "Vue"
    }
  },
  external: ['Vue'],
  plugins: [
    babel(),
    vuePlugin({
      css: true
    })
  ]
}

const iife = {
  input: "src/entry.js",
  output: {
    file: "dist/index.js",
    name: "AoolUI",
    format: "iife",
    globals: {
      vue: "Vue"
    }
  },
  external: ['Vue'],
  plugins: [
    babel(),
    vuePlugin({
      css: true
    })
  ]
}

import { terser } from 'rollup-plugin-terser'
const minEs = {
  input: "src/entry.js",
  output: {
    file: "dist/index.min.js",
    name: "AoolUI",
    format: "umd",
    globals: {
      vue: "Vue"
    }
  },
  external: ['Vue'],
  plugins: [
    babel(),
    vuePlugin({
      css: true
    }),
    terser()
  ]
}

const cjs = {
  input: "src/entry.js",
  output: {
    file: "dist/index.cjs.js",
    name: "AoolUI",
    format: "cjs",
    globals: {
      vue: "Vue"
    }
  },
  external: ['Vue'],
  plugins: [
    babel(),
    vuePlugin({
      css: true
    })
  ]
}

export default [es, iife, minEs, cjs]