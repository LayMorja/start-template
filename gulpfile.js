//* Подключение самого gulp'a
import gulp from "gulp";
//* Подключение списка плагинов
import { plugins } from "./config/settings/plugins.js";
//* Подключение путей
import { path } from "./config/settings/path.js";

global.app = {
   path: path,
   gulp: gulp,
   plugins: plugins,
}

import { css } from "./config/tasks/css.js";

export { css };
