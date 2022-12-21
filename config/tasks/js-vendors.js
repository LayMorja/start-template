import webpackStream from "webpack-stream"

export function jsVendors() {
   return app.gulp.src(`${app.path.src.js}/vendors.js`, { sourcemaps: true })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            "title": "JS",
            "message": "Error: <%= error.message %>",
         })
      ))
      .pipe(webpackStream({
         mode: "development",
         output: {
            filename: "vendors.min.js",
         }
      }))
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browsersync.stream())
}