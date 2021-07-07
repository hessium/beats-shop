const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require("gulp-rm");
const gulpSass = require("gulp-sass");
const nodeSass  = require("node-sass");
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
// const svgSprite = require("gulp-svg-sprite");
const {SRC_PATH, DIST_PATH, STYLE_LIBS, JS_LIBS} = require('./gulp.config');

const sass = gulpSass(nodeSass);

task("clean", () => {
  return src(`${DIST_PATH}/**/*`, { read: false }).pipe(rm());
});
 
task("copy:html", () => {
 return src(`${SRC_PATH}/*.html`)
 .pipe(dest(DIST_PATH))
 .pipe(reload({stream: true}));
});



task("styles", () => {
 return src([...STYLE_LIBS, 'src/styles/main.scss'])
    .pipe(sourcemaps.init())
    .pipe(concat("main.min.scss"))
    .pipe(sassGlob())
    .pipe(sass().on("error", sass.logError))
    // .pipe(px2rem())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    })
    )
    // .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
});


const libs = [
  "node_modules/jquery/dist/jquery.js", 
  "src/scripts/*.js"]

task("scripts", () => {
  return src([...JS_LIBS, "src/scripts/*.js"])
  .pipe(sourcemaps.init())
  .pipe(concat("main.min.js", {newLine: ";"}))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(dest([DIST_PATH]))
  .pipe(reload({stream: true}));
})

// task("icons", () => {
//   return src("src/img/*.svg")
//   .pipe(
//     svgo({
//     plugins: [
//       {
//         removeAttrs: { attrs: "(fill|stroke|style|width|data.*)" }
//       }
//     ]
//   })
//   )
//   .pipe(svgSprite({
//     mode: {
//       symbol: {
//         sprite: "../sprite.svg"
//       }
//     }
//   }))
//   .pipe(dest("dist/images/icons"));
// });

task("server", () => {
  browserSync.init({
      server: {
          baseDir: "./dist"
      },
      open: false
  });
});

watch("./src/styles/**/*.scss", series("styles"));
watch("./src/*.html", series("copy:html"));
watch("./src/scripts/*.js", series("scripts"));

task(
  "default", 
  series("clean", parallel("copy:html", "styles", "scripts", "scripts"), "server")
);