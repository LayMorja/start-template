import cleanCss from "gulp-clean-css";

export function cssLibs() {
   return app.gulp.src(app.path.src.stylesLibs)
      .pipe(app.plugins.concat("libs.min.css"))
      .pipe(cleanCss({}))
      .pipe(app.plugins.browsersync.stream())
      .pipe(app.gulp.dest(app.path.build.styles))
}