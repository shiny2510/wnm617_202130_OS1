CREATE TABLE IF NOT EXISTS `track_202130_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO track_202130_users VALUES
(1,'Chelsea Vasquez','user1','user1@gmail.com',md5("pass"),'https://via.placeholder.com/400/974/fff/?text=user1','2020-09-22 08:13:58'),
(2,'Mcdowell Miranda','user2','user2@gmail.com',md5("pass"),'https://via.placeholder.com/400/760/fff/?text=user2','2020-05-29 06:18:01'),
(3,'Knowles Peters','user3','user3@gmail.com',md5("pass"),'https://via.placeholder.com/400/918/fff/?text=user3','2020-08-16 06:37:31'),
(4,'Head Vinson','user4','user4@gmail.com',md5("pass"),'https://via.placeholder.com/400/974/fff/?text=user4','2021-02-10 01:55:23'),
(5,'Glenn Shaffer','user5','user5@gmail.com',md5("pass"),'https://via.placeholder.com/400/775/fff/?text=user5','2020-01-01 02:52:14'),
(6,'Juarez Walton','user6','user6@gmail.com',md5("pass"),'https://via.placeholder.com/400/916/fff/?text=user6','2020-04-22 08:55:20'),
(7,'Paige Weiss','user7','user7@gmail.com',md5("pass"),'https://via.placeholder.com/400/966/fff/?text=user7','2020-03-07 08:23:43'),
(8,'Petty Smith','user8','user8@gmail.com',md5("pass"),'https://via.placeholder.com/400/712/fff/?text=user8','2020-07-12 06:18:17'),
(9,'Randolph Mcfarland','user9','user9@gmail.com',md5("pass"),'https://via.placeholder.com/400/989/fff/?text=user9','2020-05-25 10:23:27'),
(10,'Justice Knapp','user10','user10@gmail.com',md5("pass"),'https://via.placeholder.com/400/814/fff/?text=user10','2020-03-30 10:21:25');