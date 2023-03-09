### JS Project Proposal: First-Person Labyrinth Game
# The Dark Depths


## Background

The proposed project is a first-person perspective labyrinth puzzle game using HTML canvas to draw trapezoids representing walls, floor, and ceiling. The dungeon will be grid-based, and the player will navigate through it by moving from tile to adjacent traversable tile using the arrow keys. The fill style of the left and right trapezoids will dynamically toggle based on the world state - whether there is a wall or an opening. There will not actually be any 3D rendering of anything in this project.

The project will use JavaScript and HTML Canvas to draw the dungeon and handle user input. The project will also use CSS for styling the interface. The win condition will be escaping the labyrinth to freedom. The most basic version of the game would probably just have a timer to allow players to lose the game if they don't complete the maze in time.


## Functionality

In this game, a use will be charged with navigating their way out of the labyrinth environment. The player will be able to:
-move from tile to traversable tile using the arrow keys,
-access a map screen that will be revealed as the player explores,

The game will render the view based on the world state, and will update the worldstate with each player move. The positions in the labyrinth will be organized as a node tree. At each position of the player, there are at most three possible moves, turn left, turn right, and step forward. The game will render the correct view based on the available moves at the user’s current position.

Bonus features:
-create multiple levels
-randomly select one of several starting positions for the player
-bonus bonus feature: random generation of levels
-music and sounds, including monster sounds (see below)
-monster wandering the maze - alternate lose condition (see below)


## Wireframes

![wireframe](wireframes\wireframe.png)
![map](wireframes\map.png)

-Nav links include links to this project’s Github repo, my LinkedIn, and portfolio website.
-Mute button, button to show/hide controls
-The user will be able to use the left, right, and up arrow keys, or the a, d, and w keys to turn and step forward, and the down arrow or s key to turn around; and either the space bar, enter, tab, or the m key to bring up the map.


## Technologies, Libraries, APIs

This project will be implemented with the following technologies:
-The Canvas API to render the first-person view of the labyrinth
-Webpack and Babel to bundle and transpile the source Javascript code
-npm to manage project dependencies


## Implementation Timeline

**Friday Afternoon & Weekend:** Setup project, including getting webpack up and running. Get canvas to show up on the screen, and spend time getting comfortable with the Canvas API. Create Game and WorldState classes. Get a first-person view rendered to the canvas reflecting an initial state (starting position). Implement the functions that will dynamically change the fill styles of the “walls” based on the world state, which will contain information about whether each wall is a WALL or a SPACE. Make sure everything can render correctly on the Canvas.

**Monday:** Dedicate this day toward implementing the underlying logic of the maze, including generating a very simple testing level. Organize all the possible moves as a node tree. Implement all the logic governing the level itself.

**Tuesday:** If I didn’t get to do this already, get the trapezoids correctly rendered to the canvas. Make sure they re-render correctly when I advance a position. Then, focus on the map screen: visuals, as well as logic - it should reveal itself as the player explores.

**Wednesday:** Implement user controls - movement and map toggling - and focus on styling and map generation. Add an indicator to help the user keep oriented during the state transitions - a ball that appears and moves to evoke continuity between states. If time, start on bonuses.

**Thursday Morning:** Deploy to GitHub pages. If time, rewrite this proposal as a production README.


## Bonus Features

There are many directions this dungeon escape game could eventually go. Some anticipated updates are:
-Add sounds and music
-Instead of a timer - let there be a monster wandering the labyrinth - play threatening sounds every once in a while, with volume proportional to how close the monster is