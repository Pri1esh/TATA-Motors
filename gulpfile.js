const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const fs = require('fs');
const path = require('path');

// Function to get all directories in the pages folder
function getDirectories(srcPath) {
    return fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
}

// Paths
const pagesDir = './pages/';
const distDir = './dist/';

// Compile SCSS files
function compileSass() {
    const pages = getDirectories(pagesDir);
    return gulp.series(pages.map(page => {
        return function() {
            const srcPath = path.join(pagesDir, page, `${page}.scss`);
            const destPath = distDir;

            return gulp.src(srcPath)
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest(destPath))
                .pipe(browserSync.stream()); // Inject CSS changes into browser
        };
    }));
}

// Serve files and watch for changes
function serve(done) {
    browserSync.init({
        server: {
            baseDir: './', // Serve files from the root directory
            index: 'routes.html',
            routes: {
                '/pages': 'pages', // Serve pages directory as /pages
                '/Images': 'Images' // Serve Images directory as /Images
            }
        },
        port: 3000 // You can change the port if needed
    });

    const pages = getDirectories(pagesDir);
    pages.forEach(page => {
        const scssPath = path.join(pagesDir, page, `${page}.scss`);
        gulp.watch(scssPath, compileSass());
    });

    gulp.watch('./pages/**/*.html').on('change', browserSync.reload);
    gulp.watch('./Images/**/*').on('change', browserSync.reload); // Watch the Images folder
    done();
}

// Define Gulp tasks
const buildTask = gulp.series(compileSass());
const watchTask = gulp.series(buildTask, serve);

exports.build = buildTask;
exports.watch = watchTask;
