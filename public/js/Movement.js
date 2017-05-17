//movement test


var LocationX = 15;

var LocationY = 15; 

var speed = 5;
function Move(){
	this.right = function(speed){
		var testLocal = LocationX + speed;
		if(testLocal < 16){
		LocationX = testLocal;
		}
		else{
			//second try, Each try lowers speed by 1. have to check if speed is zero to prevent allowing to stay in place
			speed--;
			testLocal = LocationX + speed;			
			if(testLocal < 16 && speed > 0){
				LocationX = testLocal;
				}
			else{
				//Third Try 
			speed--;
			testLocal = LocationX + speed;
				if(testLocal < 16 && speed > 0){
				LocationX = testLocal;
				}
				else{
					//forth Try
					speed--;
					testLocal = LocationX + speed;
					if(testLocal < 16 && speed > 0){
					LocationX = testLocal;
					}
					else{
						//Fifth Try 
						speed--;
						testLocal = LocationX + speed;
						if(testLocal < 16 && speed > 0){
						LocationX = testLocal;
						}
						else{
							console.log("Movement out of bounds");
						}

				 	}
				}
			}
		}
	}	
	this.left = function(speed){
		var testLocal = LocationX - speed;
		//this if else hell is to allow movement while close to edge of map
		//first try 
		if(testLocal > 0){
		LocationX = testLocal;
		}
		else{
			//second try, Each try lowers speed by 1. have to check if speed is zero to prevent allowing to stay in place
			speed--;
			testLocal = LocationX - speed;			
			if(testLocal > 0 && speed > 0){
				LocationX = testLocal;
				}
			else{
				//Third Try 
			speed--;
			testLocal = LocationX - speed;
				if(testLocal > 0 && speed > 0){
				LocationX = testLocal;
				}
				else{
					//forth Try
					speed--;
					testLocal = LocationX - speed;
					if(testLocal > 0 && speed > 0){
					LocationX = testLocal;
					}
					else{
						//Fifth Try 
						speed--;
						testLocal = LocationX - speed;
						if(testLocal > 0 && speed > 0){
						LocationX = testLocal;
						}
						else{
							console.log("Movement out of bounds");
						}

				 	}
				}
			}
		}
	}
	this.up = function(speed){
		var testLocal = LocationY + speed;
		if(testLocal < 16){
		LocationY = testLocal;
		}
		else{
			//second try, Each try lowers speed by 1. have to check if speed is zero to prevent allowing to stay in place
			speed--;
			testLocal = LocationY + speed;
			if(testLocal < 16 && speed > 0){
				LocationY = testLocal;
				}
			else{
				//Third Try 
			speed--;
			testLocal = LocationY + speed;
				if(testLocal < 16 && speed > 0){
				LocationY = testLocal;
				}
				else{
					//forth Try
					speed--;
					testLocal = LocationY + speed;
					if(testLocal < 16 && speed > 0){
					LocationY = testLocal;
					}
					else{
						//Fifth Try 
						speed--;
						testLocal = LocationY + speed;
						if(testLocal < 16 && speed > 0){
						LocationY = testLocal;
						}
						else{
							console.log("Movement out of bounds");
						}

				 	}
				}
			}
		}
	}
	this.down = function(speed){
		var testLocal = LocationY - speed;
		if(testLocal > 0){
		LocationY = testLocal;
		}
		else{
			//second try, Each try lowers speed by 1. have to check if speed is zero to prevent allowing to stay in place
			speed--;
			testLocal = LocationY - speed;
			if(testLocal > 0 && speed > 0){
				LocationY = testLocal;
				}
			else{
				//Third Try 
			speed--;
			testLocal = LocationY - speed;
			
				if(testLocal > 0 && speed > 0){
				LocationY = testLocal;
				}
				else{
					//forth Try
					speed--;
					testLocal = LocationY - speed;
					if(testLocal > 0 && speed > 0){
					LocationY = testLocal;
					}
					else{
						//Fifth Try 
						speed--;
						testLocal = LocationY - speed;
						if(testLocal > 0 && speed > 0){
						LocationY = testLocal;
						}
						else{
							console.log("Movement out of bounds");
						}

				 	}
				}
			}
		}
	}
}

var Normal = new Move();

console.log(LocationY+ "," +LocationX);