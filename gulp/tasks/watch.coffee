gulp        = require("gulp")
livereload  = require("gulp-livereload")

gulp.task "watch", ->
  livereload.listen()

  reload = (file) ->
    livereload.changed(file)

  gulp.watch("src/sass/**", ["sass"])
  gulp.watch(['build/**']).on('change', reload);
  gulp.watch("app/**/*.html").on("change", reload)
  gulp.watch("app/**/*.jsx", ["react"])
