# grunt-tabtospace

> a grunt tool to replace tab to space

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tabtospace --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tabtospace');
```

## The "tabtospace" task

### Overview
In your project's Gruntfile, add a section named `tabtospace` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  tabtospace: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.spaceCnt
Type: `Number`
Default value: `4`

A number value that is the count of space will be replace to for one tab.

#### options.encoding
Type: `String`
Default value: `utf-8`

A string value that is this file's encoding.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `test.js` file has the content 
`Tab` in the start of the line , the generated result would be replace to `space`

```js
grunt.initConfig({
  tabtospace: {
    options: {},
    src: {
      'src/test.js'
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
