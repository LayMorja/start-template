//* Подключение самого gulp'a
import gulp from "gulp";
//* Подключение списка плагинов
import { plugins } from "./config/settings/plugins.js";
//* Подключение путей
import { path } from "./config/settings/path.js";

//* Глобальная переменная для доступа отовсюду
global.app = {
   path: path,
   gulp: gulp,
   plugins: plugins,
}

//* Импорт задач
import { reset } from "./config/tasks/reset.js";
import { css } from "./config/tasks/css.js";
import { html } from "./config/tasks/html.js"
import { server } from "./config/tasks/server.js";
import { images } from "./config/tasks/images.js";
import { js } from "./config/tasks/js.js";
import { jsVendors } from "./config/tasks/js-vendors.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./config/tasks/fonts.js";
import { resources } from "./config/tasks/resources.js";

//* Слежка за изменениями
function watcher() {
   gulp.watch(`${path.watch.styles}`, css);
   gulp.watch(`${path.watch.html}`, html);
   gulp.watch(`${path.src.images}`, images);
   gulp.watch(`${path.src.js}`, js);
   gulp.watch(`${path.watch.resources}`, resources);
}


//* Сценарии выполнения
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

const buildTasks = gulp.series(fonts, gulp.parallel(html, css, js, images, resources));

const devTasks = gulp.series(reset, buildTasks, gulp.parallel(watcher, server));

//* Экспорт задач
export { reset };
export { css };
export { html };
export { server };
export { images };
export { js };
export { fonts };
export { jsVendors };
export { resources };

//* Экспорт сценариев выполнения
export { devTasks };
export { buildTasks };

//* Сценарий по умолчанию (Gulp)
gulp.task('default', devTasks);