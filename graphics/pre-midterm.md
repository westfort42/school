Lecture 1
=========

*Sep 9*

The course now uses WebGL and JavaScript. This is good for me, because I don't know C++. There are two different marking schemes: you can either do two or three projects, depending on how much you want your final mark to be. Begin project ASAP.

See mockup for first assignment. The goal of the game is to contain the ball in a small area in the centre of the playing field. Upon submission, file name should be something like, bwtrante.zip.

Lecture 2
=========

*Sep 11*

Like any good CS Student, nobody has managed to figure out how to get the simplest example of WebGL running, or even type `<canvas></canvas>` into a file named `index.html`. I think we're going to learn that today.

Also, there is a math library we can use that is included with the textbook. This includes a bunch of complicated linear algebra functions.  It's called something like `MV.js`. There are a few other helper libraries included as well, like ones that help with sending data to the GPU.

######Task 1: Get the most basic example in the world up and running, and then play around with it. You can do that by clicking this link (desktop Chrome only): [http://lakeheadu.cadesire2learn.com/].

Lecture 3
=========

For this course, we use shader based WebGL, with HTML5 (just the stupid canvas element). This will run in Chrome, kind of run in Firefox, kind of run in Safari, barely run in Opera, run pretty well in IE11, run in iOS 8 Safari, and kind of run is Android Chrome.

######Shader-Based -- Is This The Same Thing As Garbage?
- Does not make use of the full capabilities of the GPU
- Doesn't require shaders
- Runs in all the latest browsers, so it doesn't matter what OS you're on
- Makes use of local hardware
- No system dependencies
- Bonus: use a package manager like Bower or NPM for dealing with libs. Also use CoffeeScript, Dart, Haxe, or even Clojure for writing WebGL

Dr. Benson keeps mentioning *"JavaScript: Pocket Edition"* but you should actually read *"JavaScript: The Good Parts"*.

To get up and running with this stuff, go to the course website and download any program. That's basically your boilerplate.

Unsurprisingly, computers use raster graphics, since your screen is made of pixels as opposed to magic. This just means you can't "zoom in forever" but actually you can zoom in as much as you want and the browser will just keep calling repaint accordingly, since graphics can scale.

######History
OpenGL came out in the 90s, and Steve Jobs proceded to make Toy Story with it over the course of one weekend. In the 2000s/2010s, people started to get better at making graphics more realistic, stuff like Maya and Blender came out, LCD displays came out, 3D stuff came out, virtual reality came out, some other stuff probably happened (like CSS3 transforms 😛).

######Elements of Image Formation
A scene is made up of three things: an object, a viewer, and a light source. There are attributes that govern how light interacts with the materials in the scene. There's also a massive amount of math.

######Human Visual System
Only red, green, and blue gets sent to the brain, and the brain sorts out the rest. In graphics, we use additive colour (RGBA) instead of shitty subtractive colour (CMYK).
