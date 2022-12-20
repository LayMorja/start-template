import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = "./src";
const buildFolder = "./dist";

export const path = {
	src: {
      styles: `${srcFolder}/scss/styles.scss`,
      html: `${srcFolder}/**.*.{htm, html}`
   },
	build: {
      styles: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
   },
	watch: {
      styles: `${srcFolder}/scss/styles.scss`,
      html: `${srcFolder}/**.*.{htm, html}`
   },
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
   rootFolder: rootFolder,
}