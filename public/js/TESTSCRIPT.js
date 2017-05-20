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
   	$("#scrollbox").prepend(this.user+ " attacked" +"\n");
	  	var roll = Math.random() * (20) + this.speed;
		if(roll >= Math.random() * (20) + defender.speed){
		defender.hp -= this.weapon;

		$("#scrollbox").prepend(this.user + " did "+ this.weapon+ " damage. " + defender.user+" has "+ defender.hp + " health remaining" +"\n"); 

		defender.life();
		}
		else{
			$("#scrollbox").prepend(this.user + " missed" +"\n");
		}	
 	 }
 	this.defend = function(){
 		$("#scrollbox").prepend(this.user + " defended" +"\n");
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
	   	$("#scrollbox").prepend(this.user+ " attacked" +"\n");
		  	var roll = Math.random() * (20) + this.speed;
			if(roll >= Math.random() * (20) + defender.speed){
			defender.hp -= this.weapon;

			$("#scrollbox").prepend( this.user + " did "+ this.weapon+ " damage. " + defender.user+" has "+ defender.hp + " health remaining" +"\n"); 

			defender.life();
			}
			else{
				$("#scrollbox").prepend(this.user + " missed" +"\n");
			}	
 	 }	
	this.defend = function(){
 		$("#scrollbox").prepend(this.user + " defended" +"\n");
 		var defend = this.speed * 2;
 		this.speed = defend;   
 	}

}


var tuser = new Player("Player", 400, 60, 5, 100, "A1");

var tpir = new Pirate("Pirate", 200, 40, 2, "A1");




$("#attack").on("click", function(){
	$("#scrollbox").prepend("\n");
	var AI = Math.round(Math.random());
			switch(AI){
			case 0 :
			if(tpir.hp > 0){
				tuser.attack(tpir);
				if(tpir.hp > 0){
				tpir.attack(tuser);
				}
			}
			else{
				$("#scrollbox").prepend(tpir.user+" is defeated!" +"\n");
				$("#buttons").empty();
				tuser.kills++;
				setTimeout(1000,function(){
					window.location.replace("./game.html");
				})
				console.log(tuser.kills);
			}
			break;
			case 1 :
				if(tpir.hp > 0){
					var speedholder = tpir.speed;
				tpir.defend();
				tuser.attack(tpir);
				tpir.speed = speedholder;
			}
			else{
				$("#scrollbox").prepend(tpir.user+" is defeated!" +"\n");
				$("#buttons").empty();
				setTimeout(1000,function(){
					window.location.replace("./game_over.html");
				})
				tuser.kills++;
				console.log(tuser.kills);

			}
			break;

			
			}
			if(tuser.hp <= 0){
				$("#scrollbox").prepend("YOU ARE DEFEATED. A CAPTAIN ALWAYS GOES DOWN WITH HIS SHIP." +"\n");
				$("#buttons").empty();
				setTimeout(1000,function(){
					window.location.replace("./game_over.html");
				})
		}
		if(tpir.hp <= 0){
			$("#scrollbox").prepend(tpir.user+" is defeated!" +"\n");
				$("#buttons").empty();
				setTimeout(1000,function(){
					window.location.replace("./game.html");
				})
				
				tuser.kills++;
				console.log(tuser.kills);

		}
	
});
$("#defend").on ("click", function(){
	$("#scrollbox").prepend("\n");
	var AI = Math.round(Math.random());
			switch(AI){
			case 0 :
			if(tpir.hp > 0){
					var speedholder2 = tuser.speed;
				tuser.defend();
				if(tpir.hp > 0){
				var speedholder2 = tuser.speed;
				tuser.defend();
				tpir.attack(tuser);
				tuser.speed = speedholder2;
				}
			}
			else{
				$("#scrollbox").prepend(tpir.user+" is defeated!" +"\n");
				
				tuser.kills++;
				console.log(tuser.kills);
			}
			break;
			case 1 :
				if(tpir.hp > 0){
					var speedholder = tpir.speed;
					var speedholder2 = tuser.speed;
				tpir.defend();
				tuser.defend();
				tpir.speed = speedholder;
				tuser.speed = speedholder2;
			}
			else{
				$("#scrollbox").prepend("<p>"+tpir.user+" is defeated!" +"\n");
				tuser.kills++;
				console.log(tuser.kills);

			}
			break;

			
			}
			if(tuser.hp <= 0){
				$("#scrollbox").prepend("YOU ARE DEFEATED. A CAPTAIN ALWAYS GOES DOWN WITH HIS SHIP." +"\n");
				$("#buttons").empty();
		}
		if(tpir.hp <= 0){
			$("#scrollbox").prepend(tpir.user+" is defeated!" +"\n");
				$("#buttons").empty();
				tuser.kills++;
				console.log(tuser.kills);

		}});