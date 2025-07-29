DROP TABLE IF EXISTS posts;

CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT
);

INSERT INTO posts (id, title, content) VALUES (1, 'First Post', '初回投稿');
INSERT INTO posts (id, title, content) VALUES (2, 'Second Post', '二回投稿');
INSERT INTO posts (id, title, content) VALUES (3, 'Third Post', '三回投稿');

