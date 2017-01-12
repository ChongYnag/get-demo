/**
 * Created by jchy on 2017/1/11.
 */
'use stricr';


var gulp = require("gulp");
var less = require("gulp-less");
var cssnano = require("gulp-cssnano");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
//1.less ∫œ≤¢—πÀı°£±‡“ÎCSS
gulp.task("style",function(){
    gulp.src(['src/styles/*.less','!src/styles/_*.less'])
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.reload({
            stream:true
        }));
});
//2.JS ∫œ≤¢ —πÀıªÏœ˝
gulp.task("script",function(){
   gulp.src('src/script/*.js')
       .pipe(concat('all.js'))
       .pipe(uglify())
       .pipe(gulp.dest('dist/scripts'))
       .pipe(browserSync.reload({
           stream:true
       }));

});
//3.Õº∆¨∏¥÷∆
gulp.task('image',function(){
    gulp.src('src/images/*.*')
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.reload({
            stream:true
        }));
});
//4.HTML¥¶¿Ì
var htmlmin = require("gulp-htmlmin");
gulp.task('html',function(){
    gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream:true
        }));
});

//≤‚ ‘
var browserSync = require('browser-sync').create();
gulp.task('serve',function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch('src/styles/*.less',['style']);
    gulp.watch('src/script/*.js',['script']);
    gulp.watch('src/images/*.*',['image']);
    gulp.watch('src/*.html',['html']);
});