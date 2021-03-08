const gulp = require("gulp");
const zip = require("gulp-zip");

function bundle() {
  return gulp
    .src([
      "**/*",
      "!node_modules/**",
      "!src/**",
      "!package.json",
      "!package-lock.json",
      "!webpack.config.js",
      "!.gitignore",
      "!bundled/**",
      "!gulpfile.js",
    ])
    .pipe(zip("mytheme-blocks.zip"))
    .pipe(gulp.dest("bundled"));
}

exports.bundle = bundle;
