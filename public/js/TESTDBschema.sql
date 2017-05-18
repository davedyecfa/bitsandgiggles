create DATABASE TestSB;
 
 use TestSB;

CREATE TABLE users(
Username varchar(128) Not Null,
Location varchar(10) Not Null,
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
/*insert into users(Username,Location, Hp, Weapon, speed, crew, sensor, kills, armor, sensorname, weaponname, thrustername)
values("Socks2","1,1", 100 , 20, 2, 500, 0, 1, "Martian", "V.1", "Railgun", "V.2-AB");
*/


CREATE TABLE pirates(
id int auto_increment NOT NULL, 
hp int(4),
weapon int(3),
speed int(1),
PRIMARY KEY(id)
);

/*insert into pirates(hp, weapon, speed)
values(100, 30, 2);
*/

CREATE TABLE items(
name varchar(128),
type varchar(10),
value int(4)
);

select * from pirates;

CREATE table map(
location varchar(10),
planet boolean,
scannable boolean, 
pirate boolean, 
warning boolean, 
sun boolean, 
scan int(2),
planet varchar(15)
/*pirate foreign id,
scanloot foreign id 
*/
);

