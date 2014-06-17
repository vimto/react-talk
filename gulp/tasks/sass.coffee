sass          = require("gulp-sass")
gulp          = require("gulp")
notify        = require("gulp-notify")
handleErrors  = require("../util/handleErrors")

gulp.task "sass", ->
  gulp.src("./client/app/styles/*.scss")
  .pipe(sass(sourceComments: "map"))
  .pipe(gulp.dest("./build"))
  .on("error", handleErrors)

