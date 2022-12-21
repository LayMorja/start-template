import fileinclude from "gulp-file-include"
import version from "gulp-version-number";
import typograf from "gulp-typograf/index.js";

export function html() {
   return app.gulp.src(app.path.src.html)
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            "title": "HTML",
            "message": "Error: <%= error.message %>",
         })
      ))
      .pipe(fileinclude({}))
      .pipe(typograf({
         locale: ["ru", "en-US"],
         htmlEntity: { type: "name" },
      }))
      .pipe(app.plugins.replace(/@img\//g, "img/"))
      .pipe(app.plugins.beautify.html({ indent_size: 3 }))
      .pipe(version({
         "value": "%DT%",
         "append": {
            "key": "_v",
            "cover": 0,
            "to": ["css", "js"],
         },
         "output": {
            "file": "./config/version.json"
         }
      }))
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
}