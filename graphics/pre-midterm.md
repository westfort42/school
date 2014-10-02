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

Lecture 5
=========

*Sep 23*

Today we're talking about how to deal with the camera. The math library that's included with the textbook has a `lookAt' function that we can use to make things easier. 

######Lights and Materials

- Types of light: point sources and distributed sources.  Point sources are easier because they have a basic geometry, whereas distributed sources have very complicated geometry.
- Sources: Near and far. The further the light is, the easier it is to deal with it's geometry.
- Materials: dull stuff, shiny stuff, etc. Basically different materials handle light differently.

######WebGL

WebGL is actually a javascript implementation of ES2.0 (Open GL ES 2.0, ECMA 2). Also, JavaScript has the good old event loop everyone has come to love. OpenGL isn't object oriented whatsoever, but here is an example of a function in WebGl:
```javascript
gl.clear(gl.COLOR_BUFFER_BIT);
```

This differs from C, where it would've looked something more like:
```C
gl_clear(GL_COLOR_BUFFER_BIT);
```

######What is GLSL?
Is the language for the shaders. It is C-like, but can handle overloaded operators and has C++-like constructors. WebGL functions compile, link, and get informartion to the shaders.

**Dr Benson had a problem with using an external HTML file for the shaders. I guess you can't include a second HTML file within another HTML file using normal HTML, you'd need to use some sort of templating framework or use JavaScript to load it in via an AJAX request (and you'd need to run a basic WebServer).

######Some Notes
Just use the `onLoad` function for everything (like `<body onload='init();'>` or something similar) in this course. Also, use the canvas element with the three dimensional rendering context (even for the two dimensional assignment). There are more notes for this section in the slides on the webpage.

Another thing to remember is that once you've got your boilerplate code in place, you never have to mess with it again. Do it once and you're good to go! The math library contains a *ton* of matrix transformations, which is nice because now you don't have to worry about them.

Lecture 6
=========

*Sep 25*

Fragment Shaders vs Vertex Shaders: which one gives a better effect? -- It's fragment shading. Fragment shading used to be only possible if you were fiddling around with assembly language, but now OpenGL and DirectX can use fragment shading. 

######WebGL Primitives
```javascript
GL_POINTS
GL_LINES
GL_LINE_STRIP
GL_LINE_LOOP
GL_TRIANGLE_STRIP
GL_TRIANGLES
GL_TRIANGLE_FAN
```

Basically, WebGL will *only display* triangles.

**IF YOU'VE STARTED TO GET WEIRD ERRORS**. I *think* that some of the files are loaded via a local AJAX request, which doesn't work if you're working with static files in Chrome. Instead, either use Brackets as your text editor (by Adobe) which launches a server when you preview your document, or open up your console and do this:
```bash
$ cd /project # or wherever your project is
$ ls # check to see if index.html and all the files are in the directory
$ python -m SimpleHTTPServer
```

Lecture 7
=========

*Sep 30*

Is stuff showing up weird? Triangles are drawn in the order you specify them in the program. If you render some triangles in front of other triangles, you might not get the correct 3D effect. There is a Z buffer whicih takes distance information from the camera, and this handles the hiding of elements based on the Z (or depth) buffer.  

######Animation and Interaction

This the last bunch of info we need to get the project up and running. This is what will allow us to draw animations, trigger animations, and handle collisions.

This is also available on D2L, but you could do something like this to animate a disc spinning:

```javascript
for (var theta = 0.0; theta < thetaMax; theta += dtheta) {
	vertices[0] = vec2(Math.sin(theta), Math.cos(theta));
	// Keep doing this for vertices 1, 2, and 3
	render();
}
```

That's not actually too good, because you js controlling the loop, and you keep calling re-render. This doesn't allow you to use the full parallel capabilities of the graphics card. What should you do instead? **RECURSION**. See the recursion example on D2L.


*Double Buffering:* prevents display of partial rendering. Always display front-buffer, render into back buffer, swap buffers when necessary.


