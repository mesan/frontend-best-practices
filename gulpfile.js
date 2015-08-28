var gulp = require("gulp");
var less = require("gulp-less");
var inject = require("gulp-inject");
var browserSync = require("browser-sync").create();
var del = require("del");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task("less", function () {
  return gulp.src("./src/**/*.less")
    .pipe(less())
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("assets", function () {
  return gulp.src("./src/assets/**/*.*")
    .pipe(gulp.dest("./dist/assets"));
});

gulp.task("js", function () {
    return browserify({entries: "./src/main.js", extensions: [".js"], debug: true})
      .transform(babelify)
      .bundle()
      .pipe(source("script.js"))
      .pipe(gulp.dest("./dist"));
});

gulp.task("html", ["less", "assets", "js"], function () {
  var target = gulp.src("./src/index.html");
  var sources = gulp.src(["./dist/**/*.css", "./dist/**/*.js"], { read: false });
 
  return target.pipe(inject(sources, { ignorePath: "/dist" }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("serve", ["html"], function () {
    browserSync.init({ server: "./dist" });
    gulp.watch("./src/**/*", ["html"]);
    gulp.watch("dist/**/*").on("change", browserSync.reload);
});

gulp.task("clean", function (cb) {
  del(["./dist"], cb);
});

gulp.task("default", ["watch"]);