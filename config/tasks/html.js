import fileinclude from "gulp-file-include"

export function html() {
   return app.gulp.src(app.path.src.html)
      .pipe(fileinclude({}))
      .pipe(app.plugins.beautify.html({ indent_size: 3 }))
      .pipe(app.gulp.dest(app.path.build.html))
}