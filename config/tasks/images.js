import imagemin from "gulp-imagemin";

export function images() {
   return app.gulp.src(app.path.src.images)
      .pipe(imagemin({}, {
         optimizationLevel: 5
      }))
      .pipe(app.gulp.src(app.path.src.svg))
      .pipe(app.gulp.dest(app.path.build.images))
}