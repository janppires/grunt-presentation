# Grunt Presentation
A few lines about a _javascript task runner_.

This presentation is divided into steps. For each step we have an associated branch, that we can checkout and do some experiments.

Names of branches available in this project:

1. step-0 : Web project without a task runner
2. step-1 : Install Packet Managers and Grunt
3. step-2 : Gruntfile Cofiguration
4. step-3 : Configure Tasks and Targets

## Step 0 - Web project without a task runner
The first stage begins with a project without any task runner. From here we set Grunt to add some cool helper tools that enables and improves our productivity.

## Step 1 - Install **Brew** (OS Package Manager), **NPM** (Node Package Manager) and **Grunt**
### Install Package Managers
To install **brew** and **npm**, please consult **Useful Links** section.
If you don't have yet **npm** configured in your project folder, please run `npm init` and follow the instructions.

### Install Grunt: Grunt CLI, Grunt Task Runner and Grunt Plugins
After install **npm** in our system, we start by install _Grunt Command Line Interface_ (CLI), with command `npm install -g grunt-cli`. This will put the grunt command in your system path, allowing it to be run from any directory. 
Note that installing **grunt-cli** does not install the _Grunt task runner_. To install the _Grunt task runner_ we need to run `npm install grunt --save-dev`. This command will add the latest version of _Grunt task runner_ to the **package.json** file, under the **devDependencies** element.
Lastly, after we decide which _Grunt Plugins_ we want to use, just need to run `npm install <grunt-plugin-name> --save-dev` command.
And by this time we are ready to start configure our **Gruntfile**.

Assuming that the project has already been configured with a **package.json** and a **Gruntfile.json**, it's very easy to start working with Grunt:
1. Change to the project's root directory.
2. Install project dependencies with `npm install`.
3. Run Grunt with `grunt`.

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

    **grunt.loadNpmTasks('grunt-contrib-uglify');**
    
    Here we add all the plugins and tasks we want, pré-installed with **npm**.
4. Custom tasks

    **grunt.registerTask('default', ['uglify']);**
    
An example of a default task, which can be invoked through the command line, by typing `grunt` or `grunt default`. In this case, this represents the call of grunt **uglify** task.

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

# Useful Links
## OS Package Manager
- OSX: Brew @ http://brew.sh/
- Linux: Brew @ http://brew.sh/linuxbrew/
- Windows: Scoop @ http://scoop.sh/

## NPM - Node Package Manager
- npm @ http://npmjs.com

## Grunt
- http://gruntjs.com


