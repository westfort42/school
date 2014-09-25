For this project, why not try to do something interesting? Make the project but setup a little node server with websockets, and make the mobile view a game controller, and the web view the project (obvs). Since stupid phones can't even run WebGL, it's a good opportunity to do something cool. Also try adding a highscore module using localstorage or IndexedDB or something. You could make it someone in the class can control the the shooting character guy through their phone, so it's like a real videogame.

##COMP4471/5472
####Project 1
Due date to be announced and posted on course web page.

######Using WebGL and Javascript (but not Three.js), develop a two dimensional interactive game with the following features:
1. The playing field starts as a square centered at the origin with edges orthogonal to coordinate axes. Inside this region there is a bouncing disk using usual reflection physics off a smooth surface.
2. The player can adjust the speed of the disk and the diameter of the disk at the start of a game.
3. The player can be positioned at one of the 4 locations where the play area edges intersect the coordinate axes.
4. Interaction allowing the player to jump to another play location needs to be added
5. The player can shoot at the disk, but only in the direction from the player to the origin.
6. If the player hits the moving disk, then the edge that the player is on moves closer to the origin 
by a specific factor to be tuned to produce a good game environment.
7. If the player misses the disk, the edge the player is on moves away from the origin by a factor 
to be determined as in (6)
8. The game goal is to isolate the moving target in a small play area

A **well developed implementation** for the above will earn a grade of 85%. To get a higher grade the 
following should be completed in addition (each feature successfully completed adds 5%)
1. Put a surface feature on the disk.
2. Have the disk with the feature from (1) spin.
3. Allow the player to aim at the moving disk and not just be constrained to shooting towards the origin.

######NOTES:
1. A class demonstration is required for each game
2. Students may work in teams of two
3. You may need to read ahead for features needed to complete the game.
4. A good approach is to develop the solution in stages, adding features as more background is covered in class.

Electronic submission of source code and documentation for project 1 using Lakehead e-mail. Submit to mwbenson@lakeheadu.ca

Subject line must contain only the following (all letters are upper case, no blanks in the string):
`CS4471PROJECT_ONE_2014`

1. Submit ONE attached compressed file (.zip, or .rar). This file must have the same name as your Lakehead e-mail user id (without the @lakeheadu.ca, for example mwbenson for instructor)
2. When uncompressed this should contain all your source files plus the files specified in (3) below.
3. Include in your submission two .doc (or .docx or .pdf) files: one for a user guide and one for a gallery of screen captures (with at most a 3 line explanation of each image). The screen captures should be complete and illustrate all aspects of the project requirements sufficient for marking needs.
