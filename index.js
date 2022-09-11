// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
/*Objectif
Draw the border of a rectangle according to its top-left x1,y1 and bottom-right coordinates x2,y2. The sides are parallel to the axes.

The drawing area is represented by a grid of characters of size width and height. When a pixel is painted, it contains "#" and otherwise "."

Note that the rectangle may be outside of the drawing area.
Entrée
Line 1: width and height of the drawing area. The top-left coordinate of the whole drawing area is (0,0).
Line 2: The top-left x1,y1 and bottom-right x2,y2 coordinates of the rectangle.
Sortie
height lines: the grid of characters without spaces
Contraintes
2 <= width <= 100
2 <= height <= 100
-100 <= xn <= 200
-100 <= yb <= 200
x1 <= x2
y1 <= y2
Exemple
Entrée
30 10
5 5
29 8
Sortie
..............................
..............................
..............................
..............................
..............................
.....#########################
.....#.......................#
.....#.......................#
.....#########################
..............................
*/
var inputs = '30 10'.split(' ');
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);
var inputs = '5 5'.split(' ');
const x1 = parseInt(inputs[0]);
const y1 = parseInt(inputs[1]);
var inputs = '29 8'.split(' ');
const x2 = parseInt(inputs[0]);
const y2 = parseInt(inputs[1]);

const area = new Array(width * height).fill('.');
let cursorX = 1,
  cursorY = 0;
for (let i = 0; i <= area.length; i++) {
  if (i % width === 0) {
    cursorX = 1;
    cursorY++;
    if (cursorY > y1 && cursorY < y2) {
      area.fill('#', cursorY * width + x1, cursorY * width + x1 + 1);
      area.fill('#', cursorY * width + x2, cursorY * width + x2 + 1);
    } else if (cursorY === y1 || cursorY === y2) {
      area.fill('#', cursorY * width + x1, cursorY * width + x2 + 1);
    }
  } else {
    cursorX++;
  }
}
let display = '';
for (let i = 0; i <= area.length; i++) {
  if (i % width === 0 && i > 0) {
    console.log(display);
    display = '';
  }
  display += area[i];
} 
