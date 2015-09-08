# Grunt Presentation
A few lines about a _javascript task runner_.

#Step 3 - Configure Tasks and Targets
When Grunt runs a task, it looks for a property with same name in his configuration object. It’s possible to configure multi-tasks of the same task, with different setup, called targets. We just need to give a proper name. In this way, we are able to call all the multi-tasks at once, by typing the task `grunt task-name`, or a specific target, by typing `task-name:target`.
For each task configuration it’s possible to override any default configuration available. The same could be valid for each target.

    grunt.initConfig({
        concat: {
            options: {}
            task-target-name-1: {
                options: {}
                target options and files goes here
            },
            task-target-name-2: {
				target options and files goes here
            },
        },
        uglify: {
            task-target-name-3: {
                target options and files goes here
            },
        },
    });

Because most tasks perform file operations, Grunt has powerful abstractions for declaring on which files the task should operate. For more info please visit [File](http://gruntjs.com/configuring-tasks#files) section, in the official documentation.
