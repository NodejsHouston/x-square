// Include gulp
var gulp = require('gulp');

// Include the plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var shell = require('gulp-shell');
var todo = require('gulp-todo');
var gulpIf = require('gulp-if');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var run = require('gulp-run');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// generate a todo.md from your javascript files 
gulp.task('todo', function() {
    gulp.src('js/**/*.js')
        .pipe(todo())
        .pipe(gulp.dest('./'));
        // -> Will output a TODO.md with your todos 
});

// Delete the todo.md file if no todos were found 
gulp.task('todo-delete', function() {
    gulp.src('js/**/*.js')
        .pipe(todo())
        .pipe(gulpIf(function (file) {
            return file.todos && Boolean(file.todos.length);
        }, vinylPaths(del), gulp.dest('./')));        
});

// Use gulp-run to start x-square
gulp.task('run', function () {
	run('echo Starting mongoDB').exec()
	run('mongod').exec()	// run MongoDB.
	run('echo Starting ember').exec()
	run('ember server').exec()  // run Ember. 
	run('echo Starting Node').exec()
	run('node .').exec()    // run Node.
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'todo', 'todo-delete', 'run']);