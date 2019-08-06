# Wheel of fortune server

A server-side of group project building multiplayer game Wheel of Fortune 

# Technologies used
For this project we areusing following technbologies:

* PostgreSQL
* JavaScript
* Server-Sent Events (json-sse)
* Token Authentication (jsonwebtoken, bcryptjs)
* Sequelize
* ExpressJS

# Server Sent Events

In this project, we are allowing multiple game rooms to be streamed simultaneusly through the user of server sent events (json-sse).

The project initializes an object which populates stream data for each game room. Each stream data is an object that contains an array of clients (user ids) and a stream object. Stream datas are indexed by game id and they are dynamically created when a new game room is created.

#API Endpoints
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
* **GET @root/scoreboard**:

    Returns a list of players with beloning scores.
* **GET @root/players/:id**:

    Returns a single player with beloning score.
* **POST @root/players**:

    Creates a single player with given name.
* **PUT @root/players/:id**:

    Updates a single player with the current score.
* **POST @root/category/:id**:

    Creates a word with given description and hint that belongs to the given category
