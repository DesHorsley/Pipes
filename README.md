
# Pipes [![Build Status](https://travis-ci.org/DesHorsley/Pipes.svg?branch=master)](https://travis-ci.org/DesHorsley/Pipes) [![Test Coverage](https://codeclimate.com/github/DesHorsley/Pipes/badges/coverage.svg)](https://codeclimate.com/github/DesHorsley/Pipes/coverage)
Javascript and ascii version of the classic [1989 Pipe Mania Game](https://en.wikipedia.org/wiki/Pipe_Mania).

Playable demo can be found here [https://deshorsley.github.io/Pipes/](https://deshorsley.github.io/Pipes/)

## Work in Progress
This project is an attempt to get back to some grass roots pure javascript, just to be reminded of what its like without JQuery, Typescript, and the myriad of other frameworks we get to use these days.

## Try it yourself
Clone this repo (Or download it) and open the index.html in your browser, thats all there is too it, no libraries, no dependencies.

## Hack on it
I've been serving the html and javascript in my dev environment using [Live Server](https://github.com/tapio/live-server).

It's a neat little web server which is light weight and auto refreshes when it notices changes in the file system.

### Unit tests
Requirejs and jasmine are being used in the unit tests, there are gaurds in the code to not break when the js is being served, `require` is not needed to run the game, just the tests.

[jsdom](https://github.com/tmpvar/jsdom) is used to mimick our use of the document object

To run the unit tests open a terminal:

    npm install

    jasmine