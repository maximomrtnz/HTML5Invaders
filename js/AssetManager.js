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


// This class was written based on the following tutorials:
//
// http://www.html5rocks.com/en/tutorials/games/assetmanager/
// http://www.onextrapixel.com/2012/09/24/assets-loading-in-html5-game-development/
// https://github.com/fredsa/gritsgame/blob/0cc4868d9033951f9244174cdf9512dd3f07dcd6/src/client/scripts/pregame/assetloader.js
// http://kodogames.com/web-audio-api-tutorial/

function AssetManager() {
	this.successCount = 0;
    this.errorCount = 0;
    this.cache = {};
  	this.downloadQueue = [];
};

AssetManager.prototype.queueDownload = function(path) {
    this.downloadQueue.push(path);
};

AssetManager.prototype.downloadAll = function(downloadCallback) {

	if (this.downloadQueue.length === 0) {
    	downloadCallback();
  	}

    for (var i = 0; i < this.downloadQueue.length; i++) {
	    
	    var path = this.downloadQueue[i];

	    var that = this;

	    if(this.isImgFilename(path)){

		    var img = new Image();
		    
		    img.addEventListener("load", function() {
		    	that.successCount += 1;
		    	if (that.isDone()) {
		    		downloadCallback();
	    		}
		    }, false);
		    img.addEventListener("error", function() {
		    	that.errorCount += 1;
		    	if (that.isDone()) {
		    		downloadCallback();
	    		}
		    }, false);
		    img.src = path;
		    this.cache[path] = img;

		}else if(this.isSoundFilename(path)){

			// TODO: Load a sound
			soundManager.loadSound(path, function() {
		    	that.successCount += 1;
		    	if (that.isDone()) {
		    		downloadCallback();
	    		}
		    },
		    function(error) {
		    	that.errorCount += 1;
		    	if (that.isDone()) {
		    		downloadCallback();
	    		}
		    });

		}

  	}
};

AssetManager.prototype.isDone = function() {
    return (this.downloadQueue.length == this.successCount + this.errorCount);
}

AssetManager.prototype.getAsset = function(path) {
    return this.cache[path];
}

AssetManager.prototype.getProcess = function() {
	return (this.successCount + this.errorCount)/this.downloadQueue.length;
}


AssetManager.prototype.isImgFilename = function(path){
	return  path.indexOf('.jpg') != -1 || path.indexOf('.png') != -1 || path.indexOf('.gif') != -1 || path.indexOf('.wp') != -1;
};

AssetManager.prototype.isSoundFilename = function(path){
	return  path.indexOf('.ogg') != -1 || path.indexOf('.wav') != -1 || path.indexOf('.mp3') != -1 || path.indexOf('.m4a') != -1;
};

var assetManager = new AssetManager();