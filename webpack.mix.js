const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .extract()      // simple vendor extraction
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require("tailwindcss"),
    ])
    .version();
mix.js('resources/js/jquery-3.6.0.min.js', 'public/js');
mix.js('resources/js/edit_contact.js', 'public/js');
mix.js('resources/js/delete_contact.js', 'public/js');
//mix.copyDirectory('resources/js', 'public/js');
