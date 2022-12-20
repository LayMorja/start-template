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

//* Слежка за изменениями
function watcher() {
   gulp.watch(`${path.srcFolder}/scss/**/*.scss`, css);
}

//* Сценарии выполнения
const devTasks = gulp.series(reset, css, watcher);

//* Экспорт задач
export { css };
export { reset };
export { watcher };

//* Экспорт сценариев выполнения
export { devTasks };