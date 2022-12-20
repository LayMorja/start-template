import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import autoPrefixer from "gulp-autoprefixer";
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
      .pipe(app.gulp.dest(app.path.build.styles))
      .pipe(cleanCss({}))
      .pipe(app.plugins.rename({
         extname: ".min.css",
      }))
      .pipe(app.gulp.dest(app.path.build.styles))
}