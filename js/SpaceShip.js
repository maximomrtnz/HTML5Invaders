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

/** Represent the space ship which is the entity that a user can use to play the game **/

function SpaceShip(){

};

SpaceShip.prototype.move = function(){
	this.sprite.update(this.positionX,this.positionY);
};

SpaceShip.prototype.fire = function() {

};

/** Set SpaceShip to inherit properties from Entity **/
SpaceShip.prototype = new Entity();