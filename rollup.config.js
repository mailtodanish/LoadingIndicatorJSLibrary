import css from 'rollup-plugin-css-only';
import pkg from './package.json';

// The banner to add to the top of each file

let banner = `/*
  __version__: ${pkg.name} v${pkg.version}
  __author__ : ${pkg.author}
  __detail__:  ${pkg.description}
  __copyright__: ${new Date().getFullYear()} 
  __licence__: ${pkg.license} license 
  */`;

export default {
    input: "src/main.js",
    output: [{
        file: "build/loading-indicator-min-amd.js",
        format: 'amd',
        inlineDynamicImports: true,
        banner: banner,
    }, {
        file: "build/loading-indicator-min-iife.js",
        format: 'iife',
        inlineDynamicImports: true,
        banner: banner,
    }, {
        file: "build/loading-indicator-min-cjs.js",
        format: 'cjs',
        inlineDynamicImports: true,
        banner: banner,
    }],
    plugins: [css({ output: 'bundle.css' })]
}