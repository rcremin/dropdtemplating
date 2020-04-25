const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

// Compile scss into css
function style() {
  // 1. Where is my SCSS file
  return gulp.src('./*.scss')
    // 2. Pass that file through the SCSS-Compiler
    .pipe(sass().on('error', sass.logError))
    // 3. Where do I save the compiled CSS?
    .pipe(gulp.dest('./'))
    // 4. Steam changes to all browsers
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./*.scss', style)
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./*.scss').on('change', browserSync.reload)
}

exports.watch = watch