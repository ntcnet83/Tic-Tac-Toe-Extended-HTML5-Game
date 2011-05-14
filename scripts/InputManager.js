/*
Copyright 2011 Saiyasodharan (http://saiy2k.blogspot.com/)

This file is part of the open source game, Zic-Zac-Zoe (https://github.com/saiy2k/zic-zac-zoe/)

SpiroCanvas is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

SpiroCanvas is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Zic-Zac-Zoe.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
    This class is responsible for getting the input from user
	
	@class
*/
ZicZacZoe.InputManager	=	function() {

	/** @private */
	var pageX;
	
	/** @private */
	var pageY;
	
	/** @private */
	$(document).mousemove(function(ev) {
		pageX			=	ev.pageX;
		pageY			=	ev.pageY;
	});
	
	return {
		/** return mouse co-ordinates*/
		getMouse		:	function()
							{
								return	{'x': pageX, 'y': pageY};
							}
	};
}();