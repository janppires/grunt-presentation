module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      connect: {
        my_server_with_defaults: {}
      }
  });

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks('grunt-contrib-connect');

};