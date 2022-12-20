export function server() {
   app.plugins.browsersync.init({
      server: app.path.buildFolder,
   });
}