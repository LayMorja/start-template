import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import autoPrefixer from "gulp-autoprefixer";
import gcmq from "gulp-group-css-media-queries";
const sass = gulpSass(dartSass);

export function css() {
   return app.gulp.src(app.path.src.styles)
      .pipe(sass.sync({
         indentWidth: 3,
      }).on("error", sass.logError))
      .pipe(autoPrefixer({
         grid: true,
         overrideBrowserslist: ["last 3 versions"],
         cascade: false,
      }))
      .pipe(gcmq())
      .pipe(app.plugins.beautify.css({ indent_size: 3 }))
      .pipe(app.gulp.dest(app.path.build.styles))
      .pipe(cleanCss({}))
      .pipe(app.plugins.concat("styles.min.css"))
      .pipe(app.plugins.browsersync.stream())
      .pipe(app.gulp.dest(app.path.build.styles))
}