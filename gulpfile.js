
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');



// makes a copy html to production dist folder
// COPY ALL HTML files
gulp.task('copyHtml', () => {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});


// compliles all the sass files to one css file
// change the src folder as needed
// 'gulp sass' in terminal to run this task
// outputs prodution file into dest 'folder'
gulp.task('sass', () => {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

// minifies the css file
// change the src folder as needed
// 'gulp css' in terminal to run this task
gulp.task('css', () => {
  gulp.src('./src/css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/css'));
});

// Just Minify all JS
// gulp.src('./js/*.js')
// gulp.task('minifyJs', () => {
//   gulp.src('src/js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'));
// });

// Just Minify JS with pump (error messaging)
// gulp.task('minifyJs', () => {
//   pump([
//       gulp.src('src/js/*.js'),
//       uglify(),
//       gulp.dest('dist/js')
//     ],
//   );
// });

// Combines JS files and minifies the main.js file
gulp.task('scripts', () => {
  return gulp.src(['./src/js/app.js', './src/js/concat.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('copyJson', () => {
  gulp.src('./src/js/geoJson.js')
    .pipe(gulp.dest('./dist/js'));
});

// Optimize Images
gulp.task('imageMin', () => {
  gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
});


// ===========================

// WATCH TASKS
// task to watch the files I want to compile
// whenever you save these files
// (instead of running in the terminal each time),
// ['sass'] is the task function that will run
// 'gulp watch' in the terminal to run
gulp.task('watch', () => {
  gulp.watch('./src/sass/*.scss', ['sass']);
  gulp.watch('./src/css/*.css', ['css']);
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('./src/*.html', ['copyHtml']);
  gulp.watch('./src/js/geoJson.js', ['copyJson']);
});

// DEFAULT TASKS
// with default, to run multiple tasks
// 'gulp' in terminal
gulp.task('default', ['copyHtml', 'sass', 'css', 'scripts', 'copyJson', 'imageMin']);
