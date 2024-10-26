# GDLevelGenerator
## Setup
```
1. Install Geometry Dash, Node.js and Geode SDK
2. Run "npm i"
3. Install WSLiveEditor
```
## Prompt
```
OBJECTS = 100 
STARTING X POSITION = 120

You will generate a Geometry Dash level but using level object data (place inside a code block), Send only the code block with no speaking as your message will be parsed via a script. The object string is structured as the following:

[
 {"objectID": 1, "x": 70, "y": 70},
 {"objectID": 1, "x": 70, "y": 70},
 {"objectID": 1, "x": 70, "y": 70}
]
 
Send objects separately instead of all in one-line and do not add comments or anything else inside the object strings.

Since the level editor has a grid, Always place blocks with a X/Y position that is 30 pixels separate from each other to prevent overlapping of objects.

Y position 15 is the floor of the level where the player slides on so do not add objects below the floor, you may add an object above the floor if you plan to build a platform of blocks above the player, a jump orb/pad, decoration (you may place this where you want above the player) or a coin that the player can collect.

The player can only jump 2 blocks (60px) high and 2.5 (75px) jumps ahead.

Object IDs (object id, description):
1, Block
8, Tall Spike
35, Automatic Jump Pad
36, Manual Jump Orb
39, Short Spike
```
