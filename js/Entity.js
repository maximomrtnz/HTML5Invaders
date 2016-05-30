//  Copyright (C) 2016 Maximo Martinez
//
//  This program is free software; you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation; either version 2 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program; if not, write to the Free Software
//  Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
//
//
// Author:
//       Maximo Martinez, maximomrtnz@gmail.com
//

// This class was wrote based on the following tutorials

// http://jlongster.com/Making-Sprite-based-Games-with-Canvas
// http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/


/** Class representing an object in the scene. */

/**
 * Creates an instance of Entity.
 *
 * @constructor
 */
function Entity() {
	this.positionX;
	this.positionY;
	this.sprite;
	this.speed;
}

Entity.prototype.init = function(positionX, positionY, sprite, speed){
	this.positionX = positionX;
	this.positionY = positionY;
	this.sprite = sprite;
	this.speed = speed;
};

Entity.prototype.draw = function(ctx) {
	this.sprite.render(ctx);
};

Entity.prototype.move = function() {};

Entity.prototype.isCollidableWith = function() {

};