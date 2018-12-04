"use strict";

import gulp from "gulp";
import concat from "gulp-concat";
import insert from "gulp-inject-string";
import sourcemaps from "gulp-sourcemaps";

const outputDir = "./dist";

exports.default = gulp.task("default", () => {
  const output = "acme-shop.js";

  return buildPipeline([
      "./cases/acme-shop/setup.js",
      "./cases/acme-shop/scenarios/*.js",
      "./components/*.js",
    ], output);
});


// ========================================================
// helper
function buildPipeline(input, output) {
  return gulp.src(input, {})
    .pipe(sourcemaps.init())
      .pipe(concat(output))
      .pipe(insert.wrap(getBanner(), getFooter()))
     .pipe(sourcemaps.write())
    .pipe(gulp.dest(outputDir));
}

function getBanner() {
  return `//
// This file is automatically generated.
//
// (!!!) DO NOT MODIFY DIRECTLY! (!!!)
//\n\n`;
}

function getFooter() {
  return `
// (!!!) DO NOT REMOVE OR CHANGE THE FOLLOWING LINES! (!!!)`;
}
