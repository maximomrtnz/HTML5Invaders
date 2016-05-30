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

function GameEngine() {

	this.context = null;
	this.canvas = null;
	this.background = null;
	this.spaceShip = null;	

};


GameEngine.prototype.init = function(){

	// Create the canvas
	this.canvas = document.createElement("canvas");
	this.context = this.canvas.getContext("2d");
	this.canvas.width = 640;
	this.canvas.height = 380;
	this.canvas.scale = 1;
	document.body.appendChild(this.canvas);

	// Init sound Manager
	soundManager.init();

	// Add Assets to the AssetManager queue to be loaded later
	
	// Adding Sounds
	assetManager.queueDownload('sounds/background.mp3');
	assetManager.queueDownload('sounds/laser.wav');

	// Adding Images
	assetManager.queueDownload('images/black.png');
	assetManager.queueDownload('images/sheet.svg');	

	// Download all the assets

	var that = this;

	assetManager.downloadAll(function(){that.setup();});

};

GameEngine.prototype.setup = function(){

	// Create Background
	this.background = new BackgroundSprite();
	this.background.init(assetManager.getAsset('images/black.png'),0,0,this.canvas.width,this.canvas.height,true);

	// Create the SpaceShip Sprite

	// Space ship Sprite
	var spaceShipSprite = new Sprite();
	spaceShipSprite.init(assetManager.getAsset('images/sheet.svg'),0,0,150,120,0,0);

	this.spaceShip = new SpaceShip();
	this.spaceShip.init(0,0,spaceShipSprite);

	// Run the Game
	this.run();

};

GameEngine.prototype.update = function(){

	this.spaceShip.move();

};

GameEngine.prototype.render = function(){

	// Render Background
	this.background.render(this.context);

	this.spaceShip.draw(this.context);

};

GameEngine.prototype.run = function(){

	this.update();
	this.render();

	var that = this;
	requestAnimFrame(function(){that.run();});
};

var gameEngine = new GameEngine();