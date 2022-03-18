
SELECT task.* FROM task JOIN user_task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id WHERE user.email LIKE '%spotify.com%';

SELECT task.* FROM task JOIN user_task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id JOIN status ON status.id = task.status_id
WHERE user.name='Donald Duck' AND status.name='Not started';

SELECT task.* FROM task JOIN user_task ON user_task.task_id = task.id
JOIN user ON user_task.user_id = user.id WHERE user.name='Maryrose Meadows' AND month(created) = 9;

SELECT month(created) AS 'Created in the month', COUNT(*) AS 'Total tasks' FROM task GROUP BY month(created);
