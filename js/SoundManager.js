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
// http://kodogames.com/demo/web-audio-api-tutorial
// http://www.html5rocks.com/en/tutorials/webaudio/intro/

function SoundManager(){

	this.context;
	this.sounds = {};

};

SoundManager.prototype.init = function(){

	try {

    	window.AudioContext = window.AudioContext||window.webkitAudioContext;
    	this.context = new AudioContext();

  	}catch(e) {
  		
  		console.log('Web Audio API is not supported in this browser');
  	
  	}

};


SoundManager.prototype.loadSound = function(url, callbackOnDone, callbackOnError) {
	
	var request = new XMLHttpRequest();
  	request.open('GET', url, true);
  	request.responseType = 'arraybuffer';

  	request.onload = function() {
    	this.context.decodeAudioData(request.response, 
	    	function(buffer) { // on susses
	      	
	      		this.clips[url] = buffer;
	    		
	    		callbackOnDone(buffer);

	    	}, function(){ // on error

	    		callbackOnError();

	    	});
  	};

  	request.send();

};


var soundManager = new SoundManager();