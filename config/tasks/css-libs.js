import cleanCss from "gulp-clean-css";

export function cssLibs() {
   return app.gulp.src(app.path.src.stylesLibs)
      .pipe(app.plugins.concat("libs.min.css"))
      .pipe(app.plugins.replace(/@img\//g, "../img/"))
      .pipe(cleanCss({}))
      .pipe(app.gulp.dest(app.path.build.styles))
      .pipe(app.plugins.browsersync.stream())
}