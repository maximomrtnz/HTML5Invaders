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


// This class was wrote based on the following tutorials:
//
// http://jlongster.com/Making-Sprite-based-Games-with-Canvas


/**A "sprite" is an image that is rendered to represent an entity.**/

/**
 * Creates an instance of Sprite.
 *
 * @constructor
 */
function Sprite(){
	this.image;
	this.sourceX;
	this.sourceY;
	this.sourceWidth;
	this.sourceHeight;
};

Sprite.prototype.init = function(image, sourceX, sourceY, sourceWidth, sourceHeight,destinationX, destinationY){
	this.image = image;
	this.sourceX = sourceX;
	this.sourceY = sourceY;
	this.sourceWidth = sourceWidth;
	this.sourceHeight = sourceHeight;
	this.destinationX = destinationX;
	this.destinationY = destinationY;
};

Sprite.prototype.update = function(destinationX, destinationY){
	this.destinationX = destinationX;
	this.destinationY = destinationY;
};

Sprite.prototype.render = function(ctx){
	ctx.drawImage(this.image,this.sourceX,this.sourceY,this.sourceWidth,this.sourceHeight,this.destinationX,this.destinationY,this.sourceWidth,this.sourceHeight);
};