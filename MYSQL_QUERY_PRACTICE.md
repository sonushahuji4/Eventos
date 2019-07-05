1) select *from users join posts;

2) select *from users join posts on users.user_id = posts.user_id;

// this query will join two tables
// a posts belongs to which user
3) select *from users join posts on users.user_id = posts.user_id

4) select users.user_id, users.user_firstname, posts.event_id, posts.user_id,posts.event_message from users join posts on users.user_id = posts.user_id

+---------+----------------+----------+---------+----------------+
| user_id | user_firstname | event_id | user_id | event_message  |
+---------+----------------+----------+---------+----------------+
|       1 | Sonu           |        1 |       1 | my first post  |
|       4 | David          |        2 |       4 | my first post  |
|       2 | Divya          |        3 |       2 | my first post  |
|       3 | Shamim         |        4 |       3 | my first post  |
|       4 | David          |        9 |       4 | my second post |
|       1 | Sonu           |       16 |       1 | my second post |
|       1 | Sonu           |       17 |       1 | mmsd           |
+---------+----------------+----------+---------+----------------+

5) select posts.event_id,posts.user_id,posts.event_message, users.user_id,users.user_firstname from posts join users on posts.user_id = users.user_id;
// this post belongs to which users
+----------+---------+----------------+---------+----------------+
| event_id | user_id | event_message  | user_id | user_firstname |
+----------+---------+----------------+---------+----------------+
|        1 |       1 | my first post  |       1 | Sonu           |
|        2 |       4 | my first post  |       4 | David          |
|        3 |       2 | my first post  |       2 | Divya          |
|        4 |       3 | my first post  |       3 | Shamim         |
|        9 |       4 | my second post |       4 | David          |
|       16 |       1 | my second post |       1 | Sonu           |
|       17 |       1 | mmsd           |       1 | Sonu           |
+----------+---------+----------------+---------+----------------+

1) select *from users inner join posts on users.user_id = posts.user_id where user_firstname = "Sonu" ORDER BY `users`.`user_firstname` DESC