import webpackStream from "webpack-stream"
import uglify from "gulp-uglify-es";
const uglifier = uglify.default;

export function js() {
   return app.gulp.src(app.path.src.js, { sourcemaps: true })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            "title": "JS",
            "message": "Error: <%= error.message %>",
         })
      ))
      .pipe(webpackStream({
         mode: "development",
         output: {
            filename: "app.min.js",
         }
      }))
      .pipe(uglifier())
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browsersync.stream())
}