--- task 1 ---
SELECT
  COUNT(id)
FROM
  task;


--- task 2  ---
SELECT
  COUNT(id)
FROM
  task
WHERE
  due_date IS NULL;


--- task 3  ---
SELECT
  COUNT(id)
FROM
  task
WHERE
  status_id = 3;


--- task 4  ---
SELECT
  COUNT(id)
FROM
  task
WHERE
  NOT status_id = 3;


--- task 5  ---
SELECT
  *
FROM
  task
ORDER BY
  created DESC;


--- task 6  ---
SELECT
  *
FROM
  task
ORDER BY
  created DESC
LIMIT
  1;


--- task 7  ---
SELECT
  title,
  due_date
FROM
  task
WHERE
  title like '%database%'
  OR description like '%database%';


---- task 8 Using CASE  ----
SELECT
  title,
  CASE
    status_id
    WHEN 1 THEN 'Not started'
    WHEN 2 THEN 'In progress'
    WHEN 3 THEN 'Done'
    ELSE 'Unknown'
  END
FROM
  task;

---- task 8 Using JOINS  ----
SELECT
  task.title,
  status.name
FROM
  task
  INNER JOIN status ON task.status_id = status.id;


---- task 9 Using JOINS ----
SELECT
  COUNT(*),
  name
FROM
  status
  JOIN task ON status.id = task.status_id
GROUP BY
  name;

---- task 9 Using CASE  ----
SELECT
  CASE
    status_id
    WHEN 1 THEN 'Not started'
    WHEN 2 THEN 'In progress'
    WHEN 3 THEN 'Done'
    ELSE 'Unknown'
  END as Status,
  COUNT(*) Tasks
FROM
  task
GROUP BY
  CASE
    status_id
    WHEN 1 THEN 'Not started'
    WHEN 2 THEN 'In progress'
    WHEN 3 THEN 'Done'
    ELSE 'Unknown'
  END;
  
--- task 10  ---
SELECT
  COUNT(*),
  status.name
FROM
  task
  INNER JOIN status ON status.id = task.status_id
GROUP BY
  status.name
ORDER BY
  COUNT(*) DESC;