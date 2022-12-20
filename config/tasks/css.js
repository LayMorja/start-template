import dartSass from "sass";
import gulpSass from "gulp-sass";
import GulpCleanCss from "gulp-clean-css";
const sass = gulpSass(dartSass);

export function css() {
   return app.gulp.src(app.path.src.styles)
      .pipe(sass.sync({}).on("error", sass.logError))
      .pipe(GulpCleanCss({}))
      .pipe(app.plugins.rename({
         extname: ".min.css",
      }))
      .pipe(app.gulp.dest(app.path.build.styles))
}