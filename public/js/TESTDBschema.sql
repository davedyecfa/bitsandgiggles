create DATABASE TestSB;
 
 use TestSB;

CREATE TABLE users(
Username varchar(128) Not Null,
Location varchar(3) Not Null,
Hp int(4),
Weapon int(3),
speed int(1),
crew int(4),
sensor int(2),
kills int(99),
armor varchar(128),
sensorname varchar(128),
weaponname varchar(128),
thrustername varchar(128)
);

use TestSB;

CREATE TABLE pirates(
id int auto_increment NOT NULL, 
hp int(4),
weapon int(3),
speed int(1),
PRIMARY KEY(id)
);

/*select * from pirates;*/

CREATE TABLE items(
name varchar(128),
type varchar(10),
value int(4)
);

select * from items;


