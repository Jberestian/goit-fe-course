var gulp = require ('gulp');        //подключает Gulp в проэкт//
var browserSync = require('browser-sync').create();     //запускает авто Обновления браузеда//
var del = require ('del');       // удаляет конечный указанный файл//
var scss = require('gulp-sass');    // конвертирует sass в  css//
var autoprefix = require('gulp-autoprefixer'); //Запускает вендорный префикс// понимание для браузеров//
var css = require('gulp-cssnano'); // плагин который собирает все вкучу и минифицирует//
var riger = require('gulp-rigger'); // Позволяет импорт htnl файлов один в другой//
var media = require('gulp-merge-media-queries'); //соединяет медиа запросы//
var html = require('gulp-htmlmin'); // минифицирует html файл//
var img = require('gulp-imagemin'); //минифицирует img файл//


var path = {
  work:{
      html:'work/*.html',
      scss:'work/scss/**/*.scss',
      img:'work/img/**/*.+(png|jpg|gif|svg)',
      fonts:'work/fonts/**/*.*',
      js:'work/script/**/*.js'
  } ,
  result:{
      html:'result/',
      scss:'result/css',
      img:'result/img',
      fonts:'result/fonts',
      js:'result/script'
  }
};

gulp.task('html',function () {
    return gulp.src(path.work.html)
        .pipe(riger())
        .pipe(gulp.dest(path.result.html))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('scss', function () {
    return gulp.src(path.work.scss)
        .pipe(scss().on('error', scss.logError))
        .pipe(autoprefix({
            browsers:['last 2 versions'],
            cascade: false
        }))
        .pipe(css())
        .pipe(gulp.dest(path.result.scss))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('img', function () {
    return gulp.src(path.work.img)
        .pipe(img())
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('fonts', function () {
   return gulp.src(path.work.fonts)
       .pipe(gulp.dest(path.result.fonts))
       .pipe(browserSync.reload({stream:true}));
});

gulp.task('clear', function () {      //очищает папку с готвым проектом///
   return del.sync(path.result.html)
});


gulp.task('watch', function () {           //следить за изменениями///
    gulp.watch(path.work.html,['html']);
    gulp.watch(path.work.scss,['scss']);
});


gulp.task('server', function() {   //Инструкции для сервера///
    browserSync.init({
        server: {
            baseDir: "./result"
        },

    });
});






gulp.task('start', ['clear', 'html', 'scss', 'img', 'fonts','server','watch']);