// 获取 gulp
var gulp = require('gulp'),
    // 重命名 插件
    rename = require('gulp-rename'),
    // 压缩css插件
    minifyCSS = require('gulp-minify-css');

var APP_VERSION = '1.0';

// 4.压缩 css 文件；(命令行键入： gulp cssmin)
gulp.task('cssmin', function(){
    // 1. 找到文件
    gulp.src('test_css.css')
    // 2. 压缩文件
        .pipe(minifyCSS())
        // new: 压缩前修改压缩后新文件名字
        .pipe(rename( function(path){
          path.basename += "_" + APP_VERSION; 
        } ) )
    // 3. 另存为压缩文件
        .pipe(gulp.dest('dest/css/'))
});