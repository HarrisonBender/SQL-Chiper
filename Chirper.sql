insert into Chirps (id, userid, content, location)
values (1, 1, "TGIF!", "Home"),
	   (2, 2, "What's up?!", "Home"),
       (3, 3, "TGIF!", "Home"),
       (4, 4, "What's up?!", "Home"),
       (5, 5, "lol!", "Home"),
       (6, 6, "TGIF!", "Home"),
       (7, 7, "What's up?!", "Home"),
       (8, 8, "lol!", "Home"),
       (9, 9, "TGIF!", "Home"),
       (10, 10, "TGIF!", "Home"),
       (11, 5, "TGIF!", "Home"),
       (12, 4, "TGIF!", "Home"),
       (14, 3, "WORK WORK WORK!!", "Home"),
       (15, 8, "TGIF!", "Home"),
       (16, 9, "lol!", "Home"),
       (17, 1, "TGIF!", "Home"),
       (18, 6, "What's up?!", "Home"),
       (19, 1, "TGIF!", "Home"),
       (20, 8, "TGIF!", "Home"),
       (21, 4, "What's up?!", "Home"),
       (22, 7, "TGIF!", "Home"),
       (23, 3, "lol!", "Home"),
       (24, 2, "WORK WORK WORK!!", "Home"),
       (25, 6, "TGIF!", "Home"),
       (26, 4, "TGIF!", "Home"),
       (27, 4, "WORK WORK WORK!!", "Home"),
       (28, 1, "TGIF!", "Home"),
       (29, 1, "What's up?!", "Home"),
       (30, 1, "TGIF!", "Home"),
       (31, 1, "WORK WORK WORK!!", "Home"),
       (32, 6, "TGIF!", "Home"),
       (33, 7, "TGIF!", "Home"),
       (34, 8, "TGIF!", "Home"),
       (35, 9, "What's up?!", "Home"),
       (36, 1, "TGIF!", "Home"),
       (37, 1, "TGIF!", "Home"),
       (38, 9, "TGIF!", "Home"),
       (39, 1, "TGIF!", "Home"),
       (40, 10, "TGIF!", "Home"),
       (41, 10, "TGIF!", "Home"),
       (42, 1, "WORK WORK WORK!!", "Home"),
       (43, 1, "TGIF!", "Home"),
       (44, 6, "lol!", "Home"),
       (45, 1, "TGIF!", "Home"),
       (46, 4, "WORK WORK WORK!!", "Home"),
       (47, 2, "lol!", "Home"),
       (48, 2, "TGIF!", "Home"),
       (49, 4, "TGIF!", "Home"),
       (50, 5, "WORK WORK WORK!!", "Home"),
       (51, 9, "lol!", "Home"),
       (52, 1, "TGIF!", "Home"),
       (53, 10, "TGIF!", "Home"),
       (54, 1, "lol!", "Home"),
       (55, 1, "What's up?!", "Home"),
       (56, 1, "WORK WORK WORK!!", "Home"),
       (57, 10, "TGIF!", "Home"),
       (58, 1, "TGIF!", "Home"),
       (59, 1, "What's up?!", "Home"),
       (60, 10, "lol!", "Home");
       
       select * from Chirps;

select * from Users;

select content from Chirps;

select Chirps.content, Chirps.location, Users.name 
from Chirps
join Users on Chirps.userid = Users.id
where users.id = "2";

insert into Users (id, name, email, password) 
values (1, "Harrison", "Harrison@Chirper.com", "Password"),
	   (2, "Olivia", "Olivia@Chirper.com", "Password"),
       (3, "Michael", "Michael@Chirper.com", "Password"),
       (4, "Katie", "Katie@Chirper.com", "Password"),
       (5, "Drew", "Drew@Chirper.com", "Password"),
       (6, "Thomas", "Thomas@Chirper.com", "Password"),
       (7, "Jordan", "Jordan@Chirper.com", "Password"),
       (8, "Josie", "Josie@Chirper.com", "Password"),
       (9, "Steven", "Steven@Chirper.com", "Password"),
       (10, "Hannah", "Hannah@Chirper.com", "Password");
       
create table Mentions(
	userid int not null,
    chirpid int not null);

       
       
