'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        'dist'
                    ]
                }]
            }
        },

        concat: {
            js: {
                src: [
                    'bower_components/select2/select2.js', 
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js', 
                    'bower_components/angular-ui-utils/ui-utils.js', 
                    'bower_components/angular-ui-select2/src/select2.js', 
                    'src/bundle.js'],
                dest: 'dist/bundle.js'
            },
            css: {
                src: [
                    'bower_components/select2/select2.css', 
                    'bower_components/select2/select2-bootstrap.css'],
                dest: 'dist/bundle.css'
            }
        },

        ngmin: {
            bundle: {
                files: [{
                    src: 'dist/bundle.js',
                    dest: 'dist/bundle.min.js'
                }]
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'concat:js',
        'concat:css',
        'ngmin'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
