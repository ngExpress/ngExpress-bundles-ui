'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        clean: {
            bundle: {
                files: [{
                    dot: true,
                    src: [
                        'dist'
                    ]
                }]
            }
        },

        concat: {
            bundle: {
                src: [
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js', 
                    'bower_components/angular-ui-utils/ui-utils.js', 
                    'bower_components/angular-ui-select2/src/select2.js', 
                    'bundle.js'],
                dest: 'dist/bundle.js',
            },
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
        'concat',
        'ngmin'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
