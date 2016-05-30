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
function AnimatedSprite(image, pX, pY, pWidth, pHeight, speed, loop){

	this.image = image;
	this.pX = pX;
	this.pY = pY;
	this.pWidth = pWidth;
	this.pHeight = pHeight;
	this.speed = speed;
	this.loop = loop;

};

AnimatedSprite.prototype.render = function(ctx){

	// Calculate next frame to draw
	var x = this.pWidth;
	var y =	this.pHeight;

	var framesLength = 0;

	// Check if sprite is vertical or horizontal
	if(image.width == this.pWidth){ // Vertical

		// Get number of available frames
		framesLength = Math.floor(this.image.height/this.pHeight);

		// Set next frame
		y += this.frame * this.pHeight;

	}else if(image.height == this.pHeight){

		// Get number of available frames
		framesLength = Math.floor(this.image.width/this.pWidth);

		// Set next frame
		x += this.frame * this.pWidth;

	}

	// Check if the loop option has been set
	// and if we are in the last frame
	if( (!this.loop) && ( this.frame == framesLength ) ){
		return;
	} 

	ctx.drawImage(this.image,x,y,this.pWidth,this.pHeight,0, 0,this.pWidth,this.pHeight);

};


AnimatedSprite.prototype.update = function(dt) {
    this.frame += this.speed*dt;
}