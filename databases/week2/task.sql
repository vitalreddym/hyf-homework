INSERT INTO task(title, description, created, updated, due_date, status_id, user_id)
VALUES
('Plan the summer vacation', 'offers valid until april', '2022-01-20 08:35:00', '2022-02-04 09:40:00', '2022-04-05 12:00:00', 1, 4);

UPDATE task SET title = "Hurry up!" WHERE id=36;

UPDATE task SET due_date = "2022-08-08 10:20:00" WHERE id=36;

UPDATE task SET status_id =2 WHERE id=36;

UPDATE task SET status_id=3 WHERE id=36;

DELETE FROM task WHERE id=36;


