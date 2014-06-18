gulp = require('gulp')
react = require('gulp-react')

gulp.task('react', ->
  gulp.src('app/**/*.jsx')
    .pipe(react())
    .pipe(gulp.dest("./app"))
)
