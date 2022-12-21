import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = "./src";
const buildFolder = "./dist";

export const path = {
	src: {
      styles: `${srcFolder}/scss/*.scss`,
      html: `${srcFolder}/*.html`,
      images: [`${srcFolder}/img/**/*.{jpg,jpeg,png,webp,gif}`],
      svg: [`${srcFolder}/img/**/*.svg`, `!${srcFolder}/img/svgIcons/**/*`],
      js: `${srcFolder}/js`,
      fonts: `${srcFolder}/fonts`,
      resources: `${srcFolder}/resources/**/*`,
      sprite: `${srcFolder}/img/svgIcons/**.svg`,
   },
	build: {
      styles: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/img/`,
      js: `${buildFolder}/js/`,
      fonts: `${buildFolder}/fonts/`,
   },
	watch: {
      styles: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      images: [`${srcFolder}/img/**/*.{jpg,jpeg,png,webp,gif}`],
      svg: [`${srcFolder}/img/**/*.svg`, `!${srcFolder}/img/svgIcons/**/*`],
      js: `${srcFolder}/js/**/*.js`,
      resources: `${srcFolder}/resources/**/`,
      sprite: `${srcFolder}/img/svgIcons/**.svg`,
   },
	reset: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
   rootFolder: rootFolder,
}