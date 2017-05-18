 function Player(user, hp, weapon, speed, crew, sensor, location){
	this.user = user; //username
	this.hp = hp; //armor
	this.weapon = weapon; //railgun 
	this.speed = speed; //thrusters, movement and agility
	this.crew = crew; //crew
	this.sensor = sensor;
	this.location = location // location on map (letter,number); 
	this.kills = 0;

	this.life = function(){
		 if (this.hp > 0) {
      console.log(this.user + " is still alive!");
      return true;
    }
    console.log(this.user + " has died!");
    return false;
  	};
   this.attack = function(defender){
   	$("#target").append("<p>"+this.user+ " attacked</p>");
	  	var roll = Math.random() * (20) + this.speed;
		if(roll >= Math.random() * (20) + defender.speed){
		defender.hp -= this.weapon;

		$("#target").append( "<p>" +this.user + " did "+ this.weapon+ " damage. " + defender.user+" has "+ defender.hp + " health remaining</p>"); 

		defender.life();
		}
		else{
			$("#target").append("<p>" +this.user + " missed</p>");
		}	
 	 }
 	this.defend = function(){
 		$("#target").append("<p>" +this.user + " defended</p>");
 		var defend = this.speed * 2;
 		this.speed = defend;   
 	}

}
function Move(){
	this.right = function(speed){
		for (var i = 0; i < speed;  i++) {
			if(locationArr[0] < 15){
				var Num = Number(locationArr[0]);
				var x = Num + 1;
				locationArr[0] = x;
				var NewLocation = locationArr.join();
				tuser.location = NewLocation;
				$("#target-move").append("<p>" + tuser.location + "</p>");
			}
			else{
				$("#target-move").append("<p> You can not go any further in this direction.</p>")
			}
		}
	}
		
	
	this.left = function(speed){
		for (var i = 0; i < speed;  i++) {
			if(locationArr[0] > 1){
			var Num = Number(locationArr[0]);
			var x = Num - 1;
			locationArr[0] = x;
			var NewLocation = locationArr.join();
			tuser.location = NewLocation;
			$("#target-move").append("<p>" + tuser.location + "</p>");
			}
			else{
				$("#target-move").append("<p> You can not go any further in this direction.</p>")
			}

		}

	}
	this.up = function(speed){
		for (var i = 0; i < speed;  i++) {
			if(locationArr[1] > 1){
			var Num = Number(locationArr[1]);
			var y = Num - 1;
			locationArr[1] = y;
			var NewLocation = locationArr.join();
				tuser.location = NewLocation;
				$("#target-move").append("<p>" + tuser.location + "</p>");	
			}
			else{
				$("#target-move").append("<p> You can not go any further in this direction.</p>")
			}
		}

	}
	this.down = function(speed){
		for (var i = 0; i < speed;  i++) {
			if(locationArr[1] < 15 ){
			var Num = Number(locationArr[1]);
			var y = Num + 1;
			locationArr[1] = y;
			var NewLocation = locationArr.join();
				tuser.location = NewLocation;
				$("#target-move").append("<p>" + tuser.location + "</p>");
			}
			else{
				$("#target-move").append("<p> You can not go any further in this direction.</p>")
			}

			
		}

	}
}


var tuser = new Player("Test user", 600, 300, 2, 100, 1, "1,1");
var locationArr = tuser.location.split(",");
var Normal = new Move();
function Location(user){
$("#target-move").append("<p>Current location: " + tuser.location + "</p>");


}
$(document).ready(Location(tuser));

$("#right").on("click", function(){Normal.right(tuser.speed)});
$("#left").on("click", function(){Normal.left(tuser.speed)});
$("#up").on("click", function(){Normal.up(tuser.speed)});
$("#down").on("click", function(){Normal.down(tuser.speed)});


