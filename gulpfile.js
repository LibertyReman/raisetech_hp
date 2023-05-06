'use strict'

let { src, watch, dest, parallel } = require('gulp');
let sass = require('gulp-dart-sass');       // DartSass build
let plumber = require('gulp-plumber');      // gulpタスクでエラー発生時に強制終了するのを防ぐ
let browserSync = require('browser-sync');  // ローカルサーバーを立ててファイル監視し変更があったら自動的にブラウザ更新する


const sassBuild = (done) => {
  src('./scss/*.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(dest('./css'));
  done();
};

const watchFiles = () => {
  watch('./scss/*.scss', sassBuild);
  watch(['./css/*.css', './*.html'], bsReload);
};

const startBrowserSync = () => {
  browserSync({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
}

const bsReload = (done) => {
  browserSync.reload();
  done();
};


exports.default = parallel(startBrowserSync, watchFiles);
exports.build = sassBuild;

