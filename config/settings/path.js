import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = "./src";
const buildFolder = "./dist";

export const path = {
	src: {
      styles: `${srcFolder}/scss/styles.scss`,
      stylesLibs: `${srcFolder}/css/libs/*.css`,
      html: `${srcFolder}/*.html`,
      images: [`${srcFolder}/img/**/*`, `!${srcFolder}/img/**.*.svg`],
      imagesTemp: `${srcFolder}/temp/**/*.{png,jpg,jpeg,webp,gif}`,
      svg: `${srcFolder}/img/**/*.svg`,
      js: `${srcFolder}/js/app.js`,
   },
	build: {
      styles: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/img/`,
      js: `${buildFolder}/js/`,
   },
	watch: {
      styles: `${srcFolder}/scss/**/*.scss`,
      stylesLibs: `${srcFolder}/css/libs/*.css`,
      html: `${srcFolder}/**/*.html`,
      images: [`${srcFolder}/img/**/*`, `!${srcFolder}/img/**.*.svg`],
      svg: `${srcFolder}/img/**/*.svg`,
      js: `${srcFolder}/js/**/*.js`,
   },
	reset: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
   rootFolder: rootFolder,
}