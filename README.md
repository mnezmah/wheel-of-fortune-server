# Wheel of fortune server
## What this project is about

This is a server-side of group project building multiplayer game Wheel of Fortune using new ***Server-sent Events*** technology. 
You can find a client-side repository [here](https://github.com/malanchito/wheel-of-fortune-client)

Try deployed version on [<img src="badges/heroku.svg" width="75">](https://wheel-of-fortune-server.herokuapp.com/)

## Table of contents:

- **[Technologies used](#technologies-used)**
- **[Goals for this project](#goals-for-this-project)**
- **[Server Sent Events](#server-sent-events)** 
- **[Features built so far ](#features-built-so-far)**
- **[Endpoints used in API](#endpoints-in-this-API)**

# Technologies used

#### Click links to view some samples in this project👇

* [<img src="badges/postgres.png" width="25"> PostgreSQL](./auth/router.js)
* [<img src="badges/javascrip.png" width="25"> JavaScript](./index.js)
* [<img src="badges/Npm-logo.svg" width="50"> Server-Sent Events](./games/router.js) (json-sse)
* <img src="badges/Npm-logo.svg" width="50"> Token Authentication([jsonwebtoken](./auth/jwt.js), [bcryptjs](./users/router.js))
* [<img src="badges/sequelize.svg" width="25"> Sequelize](./Players/model.js)
* [<img src="badges/express.png" width="50"> ExpressJS](./index.js)

# Goals for this project

- To practice teamwork
- To create a full-stack-app with the given features in a given time
- To learn the server-sent events
- To practice disciplined git usage with correct branching

# Server Sent Events

In this project, we are allowing multiple game rooms to be streamed simultaneusly through the user of server sent events (json-sse).

The project initializes an object which populates stream data for each game room. Each stream data is an object that contains an array of clients (user ids) and a stream object. Stream datas are indexed by game id and they are dynamically created when a new game room is created.

# Features built so far

- **[Create DB for Users](./users)**
- **[Create DB for Players](./Players)**
- **[Create DB for Category](./category)**
- **[Create DB for Games](./games)**
- **[Create DB for Letters](./letters)**
- **[Create DB for Word](./word)**
- **[Add authentication](./auth)**
- **[Server built for App](./index.js)**

# Endpoints in this API

These are the available endpoints of the API `@root : http://mywebsite.com`.
* **POST @root/users**:  
    Creates a new user.
    <br>
    <br>
* **POST @root/logins**:  
    Logs in the user and returns an identification token valid for 2 hours.
    <br>
    <br>
* **POST @root/category**:  
    Creates a new category for a game. 
    <br>
    <br>
* **GET @root/category**:  
    Returns a list of available categories in the game.
    <br>
    <br>
* **GET @root/category/:id**:  
    Returns a single category with given id.
    <br>
    <br>
* **GET @root/stream**:  
    Returns the stream of all games.
    <br>
    <br>
* **GET @root/game/:id**:  
    Returns single game with given id with belonging players and category.
    <br>
    <br>
* **POST @root/game**:  
    Creates a new game.
    <br>
    <br>
* **PUT @root/game/:id**:  
    Changes the game parameters (wheelValue, gussed array and given letters).
    <br>
    <br>
* **GET @root/letters**:  
    Returns a list of all available letters.
    <br>
    <br>
* **POST @root/letters**:  
    Creates a set of letters for guessing the word.
    <br>
    <br>
* **GET @root/scoreboard**:\
    Returns a list of players with beloning scores.
    <br>
    <br>
* **GET @root/players/:id**:\
    Returns a single player with beloning score.
    <br>
    <br>
* **POST @root/players**:\
    Creates a single player with given name.
    <br>
    <br>
* **PUT @root/players/:id**:\
    Updates a single player with the current score.
    <br>
    <br>
* **POST @root/category/:id**:\
    Creates a word with given description and hint that belongs to the given category
