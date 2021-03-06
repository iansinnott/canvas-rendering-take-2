# Canvas Rendering Take 2

I'm exploring canvas rendering and it turns out games are a great way to learn about canvas. I built this game based on this excellent tutorial: http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/

Live Site: https://goblin-catcher.netlify.com/

![Game screenshot](https://dropsinn.s3.amazonaws.com/Screen%20Shot%202017-08-27%20at%2010.04.51%20AM.png)

## Dev

* `yarn start`: Start the dev server with hot reloading
* `yarn build`: Build the app. See NOTE below

**NOTE:** The build is currently only for development. There is no distinction between prod and dev yet. Just one `webpack.config.js`. Just something to be aware of.

## Improvements

* Implement an actual game board with tiles
  * Split images out so terrain can have a type
  * Don't allow player to pass through trees
* Make monster move
  * Add simple avoidance AI
* Add audio of some sort
* Improve sprites so something happens when the two characters collide
* Full screen
