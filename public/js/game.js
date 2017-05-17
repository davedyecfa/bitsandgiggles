// Game code goes here
// fight mechanic figured out
function Player(user, hp, weapon, speed, crew, sensor, location){
	this.user = user; //username
	this.hp = hp; //armor
	this.weapon = weapon; //railgun 
	this.speed = speed; //thrusters, movement and agility
	this.crew = crew; //crew
	this.sensor = sensor;
	this.location = location // location on map (letter,number); 

	this.life = function(){
		 if (this.hp > 0) {
      console.log(this.user + " is still alive!");
      return true;
    }
    console.log(this.user + " has died!");
    return false;
  };
   this.attack = function(defender){
   	console.log(this.user+ " attacked")
	  	var roll = Math.random() * (20) + this.speed;
		if(roll >= Math.random() * (20) + defender.speed){
		defender.hp -= this.weapon;

		console.log( this.user + " did "+ this.weapon+ " damage. " + defender.user+" has "+ defender.hp + " health remaining"); 

		defender.life();
		}
		else{
			console.log(this.user + " missed");
		}	
 	 }
 	this.defend = function(){
 		console.log(this.user + " defended");
 		var defend = this.speed * 2;
 		this.speed = defend;   
 	}

}

function Pirate( user, hp, weapon, speed, location){
	this.user = user; //pirate name
	this.hp = hp; //armor
	this.weapon = weapon; //railgun
	this.speed = speed; //thrusters, movement and agility 
	this.location = location // location on map (letter,number);
	this.life = function(){
		 if (this.hp > 0) {
      console.log(this.user + " is still alive!");
      return true;
    }
    console.log(this.user + " has died!");
    return false;
  };
  this.attack = function(defender){
  	console.log(this.user+ " attacked")
  	var roll = Math.random() * (20) + this.speed;
	if(roll >= Math.random() * (20) + defender.speed){
	defender.hp -= this.weapon;

	console.log( this.user + " did "+ this.weapon+ " damage. " + defender.user+" has "+ defender.hp + " health remaining"); 

	defender.life();
	}
	else{
		console.log(this.user + " missed");
	}	

  }
}

var tuser = new Player("Test user", 600, 30, 5, 100, "A1");

var tpir = new Pirate("Test Pirate", 500, 40, 5, "A1");

var i = 0;
do {

	console.log("round number "+ i);
	var AI = Math.round(Math.random());
			switch(AI){
			case 0 :
			if(tuser.hp > 0){
				var speedholder = tuser.speed;
				tuser.defend();
			}
			if(tpir.hp > 0){
				tpir.attack(tuser);
			}
			tuser.speed = speedholder;
			break;
			case 1 :
				if(tuser.hp > 0 && tpir.hp > 0){
				tuser.attack(tpir);
			}
				if(tpir.hp > 0){
				tpir.attack(tuser);
			}
			break;
		}
		console.log("");
	i++;
}
while (tpir.hp > 0 && tuser.hp > 0);
