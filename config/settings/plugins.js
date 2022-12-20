import beautify from "gulp-beautify";
import browserSync from "browser-sync";
import concat from "gulp-concat";
const browsersync = browserSync.create();

export const plugins = {
   concat,
   beautify,
   browsersync,
}