import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoPrefixer from "gulp-autoprefixer";
import gcmq from "gulp-group-css-media-queries";

export function css() {
   return app.gulp.src(app.path.src.styles, { sourcemaps: true })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            "title": "SCSS",
            "message": "Error: <%= error.message %>",
         })
      ))
      .pipe(app.plugins.replace(/@img\//g, "../img/"))
      .pipe(sass({
         indentWidth: 3,
         outputStyle: "expanded",
      }))
      .pipe(gcmq())
      .pipe(webpcss({
         webpClass: ".webp",
         noWebpClass: ".no-webp"
      }))
      .pipe(autoPrefixer({
         grid: true,
         overrideBrowserslist: ["last 3 versions"],
         cascade: false,
      }))
      .pipe(app.plugins.beautify.css({ indent_size: 3 }))
      // .pipe(app.gulp.dest(app.path.build.styles))
      .pipe(cleanCss({}))
      .pipe(app.plugins.rename({
         extname: ".min.css",
      }))
      .pipe(app.gulp.dest(app.path.build.styles))
      .pipe(app.plugins.browsersync.stream())
}