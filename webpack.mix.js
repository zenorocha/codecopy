let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/scripts/main.js', 'dist/scripts')
  .js('src/scripts/background.js', 'dist/scripts')
  .sass('src/styles/main.scss', 'dist/styles');

// Disable mix-manifest.json
Mix.manifest.refresh = _ => void 0
