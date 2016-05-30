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

/**  Represent a static background **/

/**
 * Creates an instance of Background.
 *
 * @constructor
 */
function BackgroundSprite(){
	
	this.image;
	this.destinationX;
	this.destinationY;
	this.destinationWidth;
	this.destinationHeight;
	this.repeat;
	this.pattern;

};

BackgroundSprite.prototype.init = function(image, destinationX, destinationY, destinationWidth, destinationHeight,repeat){
	this.image = image;
	this.destinationX = destinationY;
	this.destinationY = destinationY;
	this.destinationWidth = destinationWidth;
	this.destinationHeight = destinationHeight;
	this.repeat = repeat;
	this.pattern = null;
};

BackgroundSprite.prototype.render = function(ctx){

	if(this.repeat && this.pattern == null){
		this.pattern = ctx.createPattern(this.image, 'repeat');
	}
	
	ctx.fillStyle = this.pattern;
    	ctx.fillRect(this.destinationX, this.destinationY, this.destinationWidth, this.destinationHeight);

};

BackgroundSprite.prototype.update = function(){

};
