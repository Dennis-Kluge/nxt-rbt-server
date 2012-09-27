$(document).ready(function() {
  var paper = Raphael("map", 960, 960);

  var offset = 200;

  setInterval(function(){    
    $.get('/coordinates.json', function(data) {
  		console.log(data)
  		$.each(data, function(i, waypoint) {
  			if (waypoint.feature == "node") {

  				var circle = paper.circle((waypoint.x*8) + offset, (waypoint.y*8) + offset, 15);
  				circle.attr("fill", "#5BB75B");
  				circle.attr("stroke", "#5BB75B");  				
  				//console.log("Node: " + waypoint.x);
  			} else {
  				var circle = paper.circle((waypoint.x*8) + offset, (waypoint.y*8) + offset, 5);
  				circle.attr("fill", "49AFCD");
  				circle.attr("stroke", "#49AFCD");  				
  				//console.log("Point: " + waypoint.x);
  			};  			
  			
			});  		
		});
	}, 1000);
});