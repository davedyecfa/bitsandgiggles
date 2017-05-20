create DATABASE TestsDB;
 
 use TestsDB;

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
select * from users;
use TestsDB;
select * from users;
insert into users(Username,Location, Hp, Weapon, speed, crew, sensor, kills, armor, sensorname, weaponname, thrustername)
values("Socks","1,1", 200 , 25, 2, 500, 0, 1, "Martian", "V.1", "Railgun", "V.2-AB");



CREATE TABLE pirates(
id int auto_increment NOT NULL, 
location varchar(8),
name varchar(20),
hp int(4),
weapon int(3),
speed int(1),
PRIMARY KEY(id)
);

insert into pirates(location, name, hp, weapon, speed)
values("2,3", "Pirate 1", 100, 10, 2);
insert into pirates(location, name, hp, weapon, speed)
values("2,4", "Pirate 2", 100, 20, 2);
insert into pirates(location, name, hp, weapon, speed)
values("2,5", "Pirate 3", 100, 15, 2);
insert into pirates(location, name, hp, weapon, speed)
values("2,13", "Pirate 4", 10, 100, 2);
insert into pirates(location, name, hp, weapon, speed)
values("3,3", "Pirate 5", 250, 10, 2);
insert into pirates(location, name, hp, weapon, speed)
values("3,5", "Pirate 6", 250, 10, 2);
insert into pirates(location, name, hp, weapon, speed)
values("4,3", "Pirate 7", 125, 10, 2);
insert into pirates(location, name, hp, weapon, speed)
values("4,4", "Pirate 8", 200, 40, 2);
insert into pirates(location, name, hp, weapon, speed)
values("4,5", "Pirate 9", 100, 15, 2);
insert into pirates(location, name, hp, weapon, speed)
values("4,8", "Pirate 10", 500, 10, 9);
insert into pirates(location, name, hp, weapon, speed)
values("4,10", "Pirate 11", 100, 25, 1);
insert into pirates(location, name, hp, weapon, speed)
values("6,2", "Pirate 12", 300, 50, 2);
insert into pirates(location, name, hp, weapon, speed)
values("6,3", "Pirate 13", 400, 30, 1);
insert into pirates(location, name, hp, weapon, speed)
values("6,12", "Pirate 14", 500, 15, 2);
insert into pirates(location, name, hp, weapon, speed)
values("8,2", "Pirate 15", 220, 30, 2);
insert into pirates(location, name, hp, weapon, speed)
values("8,6", "Pirate 16", 250, 40, 2);
insert into pirates(location, name, hp, weapon, speed)
values("10,3", "Pirate 17", 300, 75, 2);
insert into pirates(location, name, hp, weapon, speed)
values("10,9", "Pirate 18", 600, 150, 2);
insert into pirates(location, name, hp, weapon, speed)
values("10,11", "Pirate 19", 200, 50, 2);
insert into pirates(location, name, hp, weapon, speed)
values("11,6", "Pirate 20", 100, 10, 2);
insert into pirates(location, name, hp, weapon, speed)
values("11,14", "Pirate 21", 150, 60, 2);
insert into pirates(location, name, hp, weapon, speed)
values("12,10", "Pirate 22", 100, 5, 2);
insert into pirates(location, name, hp, weapon, speed)
values("12,12", "Pirate 23", 150, 60, 2);
insert into pirates(location, name, hp, weapon, speed)
values("12,14", "Pirate 24", 200, 80, 2);
insert into pirates(location, name, hp, weapon, speed)
values("13,2", "Pirate 25", 150, 60, 2);
insert into pirates(location, name, hp, weapon, speed)
values("14,4", "Pirate 26", 50, 10, 2);
insert into pirates(location, name, hp, weapon, speed)
values("14,6", "Pirate 27", 40, 200, 2);
insert into pirates(location, name, hp, weapon, speed)
values("14,11", "Pirate 28", 100, 16, 2);
insert into pirates(location, name, hp, weapon, speed)
values("14,13", "Pirate 29", 1, 1, 1);
insert into pirates(location, name, hp, weapon, speed)
values("15,15", "Pirate Boss", 1000, 10000, 9);


/*
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

);
*/
