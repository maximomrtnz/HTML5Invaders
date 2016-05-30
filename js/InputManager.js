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

// This class was wrote based on the following tutorials 

// https://github.com/fredsa/gritsgame/blob/master/src/client/scripts/core/InputEngine.js
// http://www.gaminglogy.com/tutorial/controls-keyboard/

/**
 * Creates an instance of InputManager.
 *
 * @constructor
 */
function InputManager(){
	this.actions = {};
	this.bindings = {};
};

InputManager.prototype.init = function(){

	// Bind key with actions

	// UP
	this.bindings[KEY.W] = INPUT_ACTIONS.UP;
	this.bindings[KEY.UP_ARROW] = INPUT_ACTIONS.UP;
	
	// DOWN
	this.bindings[KEY.S] = INPUT_ACTIONS.DOWN;
	this.bindings[KEY.DOWN_ARROW] = INPUT_ACTIONS.DOWN;

	// LEFT
	this.bindings[KEY.A]= INPUT_ACTIONS.LEFT;
	this.bindings[KEY.LEFT_ARROW] = INPUT_ACTIONS.LEFT;

	// RIGTH
	this.bindings[KEY.D] = INPUT_ACTIONS.RIGHT;
	this.bindings[KEY.RIGHT_ARROW] = INPUT_ACTIONS.RIGHT;

};

InputManager.prototype.onKeyDown = function(event){
	
	// Get Key code
	var keyCode = (event.keyCode) ? event.keyCode : event.charCode;

	// Get Actions
	var action = this.bindings[keyCode];

	if(action){
		event.preventDefault();
		this.actions[action] = true;
	}

};

InputManager.prototype.onKeyUp = function(event){
	
	// Get Key code
	var keyCode = (event.keyCode) ? event.keyCode : event.charCode;

	// Get Actions
	var action = this.bindings[keyCode];

	if(action){
		event.preventDefault();
		this.actions[action] = false;
	}

};

InputManager.prototype.state = function(action){
	return this.actions[action];
};

var KEY = {
  'BACKSPACE': 8,
  'LEFT_ARROW': 37,
  'UP_ARROW': 38,
  'RIGHT_ARROW': 39,
  'DOWN_ARROW': 40,
  'A': 65,
  'D': 68,
  'S': 83,
  'W': 87
};

var INPUT_ACTIONS = {
	'UP':'UP',
	'LEFT':'LEFT',
	'RIGHT':'RIGHT',
	'DOWN':'DOWN'
};

var inputManager = new InputManager();