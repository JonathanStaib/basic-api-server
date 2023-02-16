# LAB - Class 03

## Project: Basic API Server

### Author: Jonathan Staib

### Problem Domain

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/JonathanStaib/basic-express-server/actions/)
- [sequelize docs](https://sequelize.org/docs/v6/core-concepts/model-instances/)
- My Code Challenge Partner Martin

### Setup

#### `.env` requirements (where applicable)

PORT
DATABASE_URL

#### How to initialize/run your application (where applicable)

`npm start`

#### How to use your library (where applicable)

psql

#### Features / Routes

- this is a log: When server is running properly at status 200, you will receive req path and req method
- when doing post in`game` you can add a new game to the database!
- when doing get in `game` you can access all games in the database!
- when going to delete in `game` you can delete a game by in ID in the database!
- when entering put in `game` you can update a game by Id! 'incomplete'
^^^ all the same for `/food` as well!
- GET : empty query or no query with `/person` - status 500
- GET : `/invalid` - status 404

#### Tests

- How do you run tests?
    npm test, thunder client and guthub actions to check the tests
- Any tests of note?
    1. 404 on a bad route
    2. 404 on a bad method
    3. The correct status codes and returned data for each REST route
        - Create a record using POST
        - Read a list of records using GET
        - Read a record using GET
        - Update a record using PUT
        - Destroy a record using DELETE

- Describe any tests that you did not complete, skipped, etc
    all of the ones in number 3 are incomplete. I had a hard time today and I am completely wiped. I will continue this week with them. 

#### UML

[UML img](./assets/UML.png)