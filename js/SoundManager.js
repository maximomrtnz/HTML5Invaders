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

// This class was wrote based on the following tutorials:
//
// http://kodogames.com/demo/web-audio-api-tutorial
// http://www.html5rocks.com/en/tutorials/webaudio/intro/
// https://github.com/fredsa/gritsgame/blob/master/src/client/scripts/core/soundManager.js

function SoundManager(){

	this.context = null;
	this.sounds = {};
	this.volume = 2;
	this.mainNode = null;

};

SoundManager.prototype.init = function(){

	try {

    	window.AudioContext = window.AudioContext||window.webkitAudioContext;
    	
    	this.context = new AudioContext();

    	this.mainNode = this.context.createGain();
		
		this.mainNode.gain.value = this.volume;

		this.mainNode.connect(this.context.destination);

  	}catch(e) {
  		
  		console.log('Web Audio API is not supported in this browser');
  	
  	}

};


SoundManager.prototype.loadSound = function(path, callbackOnDone, callbackOnError) {
	
	var that = this;

	var request = new XMLHttpRequest();
  	request.open('GET', path, true);
  	request.responseType = 'arraybuffer';

  	request.onload = function() {
    	that.context.decodeAudioData(request.response, 
	    	function(buffer) { // on susses
	      		
	      		var sound = { buffer:buffer };

	      		that.sounds[path] = sound;
	    		
	    		callbackOnDone(buffer);

	    	}, function(error){ // on error

	    		callbackOnError(error);

	    		console.log(error);

	    	});
  	};

  	request.send();

};


SoundManager.prototype.playSound = function(path, loop){

	var sound = this.sounds[path];

	if(sound == null){
    	return;
	}

	var source = this.context.createBufferSource();
  	
  	source.buffer = sound.buffer;

  	// loop the audio?
  	source.loop = loop;

  	// connect the source to the main node
  	source.connect(this.mainNode);

  	// set the gain (volume)
  	//source.gain.value = this.volume;

  	// play sound
  	source.start(0);

};

SoundManager.prototype.muteSound = function(path){

	var sound = this.sounds[path];

	if(sound == null){
    	return;
	}

	sound.gainNode.gain.value = 0;

};


SoundManager.prototype.muteAll = function(){

	this.mainNode.gain.value = 0;

};


SoundManager.prototype.togglemute = function(){

	if(this.mainNode.gain.value > 0){
		this.muteAll();
	}else{
		this.mainNode.gain.value = this.volume;
	}

};


var soundManager = new SoundManager();