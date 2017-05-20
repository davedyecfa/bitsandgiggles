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
				$("#target-move").html("<p>" + tuser.location + "</p>");
				RMove();
				LocalAct(NewLocation);

			}
			else{
				$("#target-move").html("<p> You can not go any further in this direction.</p>")
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
			$("#target-move").html("<p>" + tuser.location + "</p>");
			LMove();
			LocalAct(NewLocation);
			}
			else{
				$("#target-move").html("<p> You can not go any further in this direction.</p>")
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
				$("#target-move").html("<p>" + tuser.location + "</p>");
				UMove();	
				LocalAct(NewLocation);
			}
			else{
				$("#target-move").html("<p> You can not go any further in this direction.</p>")
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
				$("#target-move").html("<p>" + tuser.location + "</p>");
				DMove();
				LocalAct();
			}
			else{
				$("#target-move").html("<p> You can not go any further in this direction.</p>")
			}

			
		}

	}
}


var tuser = new Player("Test user", 600, 300, 1, 100, 1, "2,2");

var locationArr = tuser.location.split(",");
var Normal = new Move();

function Location(user){
$("#target-move").html("<p>Current location: " + tuser.location + "</p>");
}
$(document).ready(Location(tuser));

$("#right").on("click", function(){Normal.right(tuser.speed)});
$("#left").on("click", function(){Normal.left(tuser.speed)});
$("#down").on("click", function(){Normal.down(tuser.speed)});
$("#up").on("click", function(){Normal.up(tuser.speed)});

window.addEventListener("keydown", onKeyDown, false);


function onKeyDown(event){
  var keyCode = event.keyCode;
  switch(keyCode){
  	case 87: //w
      console.log("w");
      Normal.up(tuser.speed)
    break;
    case 68:  //d
        console.log("d");
        Normal.right(tuser.speed);
    break;
    case 83:  //s
        console.log("s");
        Normal.down(tuser.speed)
    break;
    case 65:  //a
    console.log("a");
   Normal.left(tuser.speed)
       
    break;
  }
}


var canvas = document.getElementById('GameMap'),
    c = canvas.getContext('2d');
    //vertical lines 
    //c.fillRect(350,350,50,50);
    c.fillStyle = "blue";
    c.fillRect(375,375,15,15);
    
	function load(){
		grid();
		planets();
		c.fillStyle="green";
		c.fillRect((locationArr[0] - 1) * 50,(locationArr[1]-1)  * 50, 15, 15);
	}
	load();
	
	function DMove(){
	var oldx = (locationArr[0] - 1) * (50);
	var oldy = (locationArr[1] - 1) * (50);
	var Newy = oldy + 50;

		c.clearRect(0 , 0, 750, 750);
			grid();
			planets();
			
			c.fillStyle= "green";
			c.fillRect(oldx,oldy, 15, 15);

	}

	function UMove(){
	var oldx = (locationArr[0] - 1) * (50);
	var oldy = (locationArr[1] - 1) * (50);
	var Newy = oldy - 50;

		c.clearRect(0 , 0, 750, 750);
			grid();
			planets();
			
			c.fillStyle= "green";
			c.fillRect(oldx,oldy, 15, 15);

	}

	function RMove(){
		var oldx = (locationArr[0] - 1) * (50);
		var oldy = (locationArr[1] - 1) * (50);
		var Newx = oldy + 50;

		c.clearRect(0 , 0, 750, 750);
			grid();
			planets();
			
			c.fillStyle= "green";
			c.fillRect(oldx,oldy, 15, 15);

	}
	function LMove(){
		var oldx = (locationArr[0] - 1) * (50);
		var oldy = (locationArr[1] - 1) * (50);
		var Newx = oldy - 50;

		c.clearRect(0 , 0, 750, 750);
			grid();
			planets();
			
			c.fillStyle= "green";
			c.fillRect(oldx,oldy, 15, 15);

	}
		/*
		function Danimate(){
		
			requestAnimationFrame(Danimate);
			c.clearRect(0 , 0, 750, 750);
			grid();
			planets();
			
			c.fillStyle= "green";
			c.fillRect(oldx,oldy, 15, 15);
			if(oldy > Newy){

			}
			else{
				oldy += 1;
			}
		}
		*/
	

	function grid(){
		var start = 50;
	for (var i = 0; i < 15; i++) {
		
		c.beginPath();
		c.moveTo(0,start);
		c.lineTo(750, start);
		c.strokeStyle = "red";
		c.stroke();
		start = start + 50;

	}
	start = 50
	for (var i = 0; i < 15; i++) {
		
		c.beginPath();
		c.moveTo(start,0);
		c.lineTo(start, 750);
		c.strokeStyle = "pink";
		c.stroke();
		start = start + 50;

	}
	}

	function planets(){
		//sun (8,8)
		c.beginPath();
		c.fillStyle = "orange";
		c.arc(375,375,30, 0, Math.PI * 2, false);
		c.fill();
		//Mercury(8,7)
		c.beginPath();
		c.fillStyle = "grey";
		c.arc(375,325,5, 0, Math.PI * 2, false);
		c.fill();
		//Venus (9,9)
		c.beginPath();
		c.fillStyle = "skyblue";
		c.arc(425,425,10, 0, Math.PI * 2, false);
		c.fill();
		//Earth (6,6)
		c.beginPath();
		c.fillStyle = "blue";
		c.arc(275,275,13, 0, Math.PI * 2, false);
		c.fill();
		//Mars (7,10)
		c.beginPath();
		c.fillStyle = "red";
		c.arc(325,475,13, 0, Math.PI * 2, false);
		c.fill();
		//Jupiter (11,5)
		c.beginPath();
		c.fillStyle = "redorange";
		c.arc(525,225,23, 0, Math.PI * 2, false);
		c.fill();
		//Saturn (4,12)
		c.beginPath();
		c.fillStyle = "brown";
		c.arc(175,575,17, 0, Math.PI * 2, false);
		c.fill();
		//Uranus (13,8)
		c.beginPath();
		c.strokeStyle = "yellow";
		c.arc(625,375,12, 0, Math.PI * 2, false);
		c.fill();
		//Neptune (3,4)
		c.beginPath();
		c.fillStyle = "purple";
		c.arc(125,175,18, 0, Math.PI * 2, false);
		c.fill();
		//Pluto (14,15)
		c.beginPath();
		c.fillStyle = "rgba(0,114,255,1)";
		c.arc(675,725,5, 0, Math.PI * 2, false);
		c.fill();
	}
	
	

function LocalAct(){

	switch(tuser.location){

		case "2,3"://PIRATE 
		$("#target-move").html(tuser.location);

		break;

		case "2,4": //PIRATE 
$("#target-move").html(tuser.location);
		break;
	
		case "2,5": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "2,13": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "3,3": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "3,4": //Planet Neptune
$("#target-move").html(tuser.location);
		break;

		case "3,5"://PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "4,3": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "4,4": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "4,5": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "4,8": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "4,10"://PIRATE  
$("#target-move").html(tuser.location);
		break;

		case "4,12": //Planet Saturn
$("#target-move").html(tuser.location);
		break;

		case "6,2": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "6,3": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "6,6": //Planet Earth
$("#target-move").html(tuser.location);
		break;

		case "6,12"://PIRATE  
$("#target-move").html(tuser.location);
		break;

		case "7,10": //Planet Mars
$("#target-move").html(tuser.location);
		break;

		case "8,2"://PIRATE  
$("#target-move").html(tuser.location);
		break;

		case "8,6": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "8,7"://Planet Mercury and sun warning
$("#target-move").html(tuser.location);
		break;

		case "8,8"://SUN Instant death 
$("#target-move").html("YOURE DEAD!");
		break;

		case "9,9": //Planet Venus
$("#target-move").html(tuser.location);
		break;

		case "10,3": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "10,9": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "10,11": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "11,5": //Planet Jupiter
$("#target-move").html(tuser.location);
		break;

		case "11,6": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "11,14": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "12,10": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "12,12": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "12,14": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "13,2": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "13,8": //Planet Uranus
$("#target-move").html(tuser.location);
		break;

		case "14,4": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "14,6": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "14,11": //PIRATE 
$("#target-move").html(tuser.location);
		break;
		case "14,13": //PIRATE 
$("#target-move").html(tuser.location);
		break;

		case "14,15": //Planet Pluto and Pirate space warning
$("#target-move").html(tuser.location);
		break;

		case "15,15": //PIRATE BOSS
$("#target-move").html(tuser.location);
		break;
		
		case "7,7": //Sunwarning
$("#target-move").html(tuser.location);
		break;

		case "7,8":  //Sunwarning
$("#target-move").html(tuser.location);
		break;

		case "7,9":  //Sunwarning
$("#target-move").html(tuser.location);
		break;

		case "8,9":  //Sunwarning
$("#target-move").html(tuser.location);
		break;

		case "9,7":  //Sunwarning
$("#target-move").html(tuser.location);
		break;

		case "9,8":  //Sunwarning
$("#target-move").html(tuser.location);
		break;

		case "9,9":  //Sunwarning
$("#target-move").html(tuser.location);
		break;
		
		case "15,13": //pirate space warning
$("#target-move").html(tuser.location);
		break;

		case "15,14": //pirate space warning
$("#target-move").html(tuser.location);
		break;

		case "13,13": //pirate space warning
$("#target-move").html(tuser.location);
		break;

		case "13,14": //pirate space warning
$("#target-move").html(tuser.location);
		break;

		case "13,15": //pirate space warning
$("#target-move").html(tuser.location);
		break;

		case "14,14": //pirate space warning
$("#target-move").html(tuser.location);
		break;

		case "14,13": //pirate space warning
$("#target-move").html(tuser.location);
		break;
	}
}