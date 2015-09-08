module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      connect: {
        options:{
          keepalive:true
        },
        my_server_with_defaults: {
          // http://localhost:8000/app
        },
        my_server_customized: {
          // http://localhost:9000
          options: {
            port: 9000,
            base: ['.', 'app'],
            protocol: 'http',
            hostname: '0.0.0.0',
            debug: false
          }
        }
      }
  });

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect:my_server_with_defaults']);
  grunt.registerTask('custom', ['connect:my_server_customized']);
};
