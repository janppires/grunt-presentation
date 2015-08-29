# Grunt Presentation
A few lines about a _javascript task runner_

## Step 1 - Install **Brew** (OS Package Manager), **NPM** (Node Package Manager) and **Grunt**
### Install Package Managers
To install **brew** and **npm**, please consult **Useful Links** section.
If you don't have yet **npm** configured in your project folder, please run `npm init` and follow the instructions.

### Install Grunt: Grunt CLI, Grunt Task Runner and Grunt Plugins
After install **npm** in your system, install _Grunt Command Line Interface_ (CLI), with command `npm install -g grunt-cli`. This will put the grunt command in your system path, allowing it to be run from any directory. 
Note that installing **grunt-cli** does not install the _Grunt task runner_. To install the _Grunt task runner_ we need to run `npm install grunt --save-dev`. This command will add the latest version of _Grunt task runner_ to the **package.json** file, under the **devDependencies** element.
Lastly, after we decide which _Grunt Plugins_ we want to use, just need to run `npm install <grunt-plugin-name> --save-dev` command.
And by this time we are ready to start configure our **Gruntfile**.

Assuming that the project has already been configured with a **package.json** and a **Gruntfile.json**, it's very easy to start working with Grunt:
1. Change to the project's root directory.
2. Install project dependencies with `npm install`.
3. Run Grunt with `grunt`.

## Step 2 - Grunt Configuration


# Useful Links
## OS Package Manager
OSX: Brew @ http://brew.sh/
Linux: Brew @ http://brew.sh/linuxbrew/
Windows: Scoop @ http://scoop.sh/
## NPM - Node Package Manager
npm @ http://npmjs.com


