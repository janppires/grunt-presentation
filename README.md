# Grunt Presentation
A few lines about a _javascript task runner_.

## Step 2 - Gruntfile Configuration
Create a **Gruntfile.js** (or Gruntfile.coffee) that belongs in the root directory of our project. This file is used to configure or define tasks and load Grunt plugins. It should be committed with our project source, next to the **package.json** file.
Because it’s a Javascript file (or CoffeeScript file) we are not limited to JSON. We may even programmatically generate the configuration if necessary.
A Gruntfile is comprised of the following parts:
1. The "wrapper" function:

    **module.exports = function(grunt) {
      // Do grunt-related things in here
    };**
2. Project and task configuration

    **grunt.initConfig({});**

    Here we define an object with all tasks configurations that are passed to **initConfig** method. We can use <%%> template strings to reference any config properties.
3. Loading Grunt plugins and tasks

    **grunt.loadNpmTasks('grunt-contrib-connect');**

    Here we add all the plugins and tasks we want, pré-installed with **npm**.
4. Custom tasks

    **grunt.registerTask('default', ['connect']);**

An example of a default task, which can be invoked through the command line, by typing `grunt` or `grunt default`. In this case, this represents the call of grunt **connect** task.
