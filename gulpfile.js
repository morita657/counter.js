"use strict";
var gulp = require("gulp");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify-es").default;

gulp.task("compress", function() {
  return gulp
    .src("counter.js")
    .pipe(rename("counter.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./"));
});

gulp.task("default", ["compress"]);
