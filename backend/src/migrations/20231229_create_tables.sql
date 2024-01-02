-- 20231229_create_tables.sql

CREATE DATABASE notes;

CREATE TABLE IF NOT EXISTS notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    done BOOLEAN DEFAULT false,
    active BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT
);

ALTER TABLE notes
    ADD COLUMN category_id INTEGER REFERENCES categories(id);
