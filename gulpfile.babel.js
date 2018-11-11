"use strict";

import gulp from "gulp";
import concat from "gulp-concat";

exports.default = gulp.task("default", () => {
  return gulp.src([
      "./cases/acme-shop/setup.js",
      "./cases/acme-shop/scenarios/*.js",
      "./cases/acme-shop/debugging_scenario.js",
      "./components/*.js",
    ], {})
    .pipe(concat("acme-shop.js"))
    .pipe(gulp.dest("./dist"));
});
