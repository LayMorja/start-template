export function resources() {
   return app.gulp.src(app.path.src.resources)
      .pipe(app.gulp.dest(app.path.build.resources))
}