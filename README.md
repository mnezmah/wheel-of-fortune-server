# Wheel of fortune server
## What this project is about

This is a server-side of group project building multiplayer game Wheel of Fortune using new ***Server-sent Events*** technologiy. 
You can find a client-side repository [here](https://github.com/malanchito/wheel-of-fortune-client)

Try deployed version on [<img src="badges/heroku.png" width="100">](https://wheel-of-fortune-server.herokuapp.com/)

## Table of contents:

- **[Technologies used](#technologies-used)**
- **[Goals for this project](#goals-for-this-project)**
- **[Server Sent Events](#server-sent-events)** 
- **[Features built so far ](#features-built-so-far)**
- **[Endpoints used in API](#endpoints-in-this-API)**

# Technologies used
For this project we areusing following technbologies:

* [<img src="badges/postgres.png" width="100"> PostgreSQL](https://www.postgresql.org/)
* [<img src="badges/javascript.png" width="50"> JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [<img src="badges/Npm-logo.svg" width="50"> Server-Sent Events](https://www.npmjs.com/package/json-sse) (json-sse)
* <img src="badges/Npm-logo.svg" width="50"> Token Authentication([jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken), [bcryptjs](https://www.npmjs.com/package/bcryptjs))
* [<img src="badges/sequelize.png" width="50"> Sequelize](https://sequelize.org/)
* [<img src="badges/express.png" width="50"> ExpressJS](https://expressjs.com/)

# Goals for this project

- To practice teamwork
- To create a full-stack-app with iven features in given time
- To learn server-sent events
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
    Creates new user.
* **POST @root/logins**:  
    Logs in the user and returns an identification token valid for 2 hours.
* **POST @root/category**:  
    Creates a new category for a game. 
* **GET @root/category**:  
    Returns a list of available categories in the game.
* **GET @root/category/:id**:  
    Returns a single category with given id.
* **GET @root/stream**:  
    Returns the stream of all games.
* **GET @root/game/:id**:  
    Returns single game with given id with belonging players and category.
* **POST @root/game**:  
    Creates a new game.
* **PUT @root/game/:id**:  
    Changes the game parameters (wheelValue, gussed array and given letters).
* **GET @root/letters**:  
    Returns a list of all available letters.
* **POST @root/letters**:  
    Creates a set of letters for guessing the word.
* **GET @root/scoreboard**:\
    Returns a list of players with beloning scores.
* **GET @root/players/:id**:\
    Returns a single player with beloning score.
* **POST @root/players**:\
    Creates a single player with given name.
* **PUT @root/players/:id**:\
    Updates a single player with the current score.
* **POST @root/category/:id**:\
    Creates a word with given description and hint that belongs to the given category
