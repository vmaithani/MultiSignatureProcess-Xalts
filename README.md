# MultiSignatureProcess-Xalts

Setup local DB - 
user: 'postgres',
host: 'localhost',
database: 'notifcation',
password: 'postgres',
port: 5400,

Create Tables in DB - 
-- Create the 'users' table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  metamask_wallet VARCHAR(255)
);

-- Create the 'processes' table
CREATE TABLE processes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  signatory_ids VARCHAR(255) NOT NULL, -- Store signatory IDs as a string (comma-separated, for example)
  comments TEXT NOT NULL,
  picture BYTEA NOT NULL -- Store binary image data
);

-- Create the 'comments' table
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  process_id INTEGER REFERENCES processes(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  visible_to INTEGER[] -- Store user IDs who can see the comment
);

Run Commands - 
npm i
npm start --> to start service.
Open HTML files inside views to run project on browser. Consists of login.html , process.html , signup.html




