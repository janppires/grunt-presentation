module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      connect: {
        server: {
          options: {
            port: 9001,
            base: {
              path: '.',
              options: {
                index: 'app/index.html'
              }
            },
            keepalive: true
          }
        },
        server2: {
          options: {
            port: 9001,
            keepalive: true
          }
        }
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');

};