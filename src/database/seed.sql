BEGIN;

-- id, username, hash, created_at
INSERT INTO users VALUES 
(1, 'Patrick', 'asdfklöjasödklfjö', DATE('now')),
(2, 'Abby', 'asldkfjaldf', DATE('now')),
(3, 'Sumithra', 'asljkdfhlksdf', DATE('now'))
ON CONFLICT DO NOTHING;

-- id, user_id, name, author, rating, sharing
INSERT INTO books VALUES 
(1, 1, 'Enders game', 'Ender', 5, 1 ),
(2, 1, 'Speaker for the Dead', 'Ender', 5, 1 ),
(3, 2, 'The Alchemist', 'Paulo Coelho', 5, 1 ),
(4, 2, 'The Unbearable Lightness of Being', 'Milan Kundera', 5, 1 ),
(5, 3, 'Brave New World', 'Aldous Huxley', 5, 1 )
ON CONFLICT DO NOTHING;


COMMIT;