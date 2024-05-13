```
# Boilerplate for Node.js, GraphQL, and React.js

This is a boilerplate project designed to kickstart your development process using Node.js for the backend, GraphQL for API queries, mutations, and subscriptions, and React.js for the frontend. It's configured to get you up and running quickly with a solid foundation for your project.

## Getting Started

### Clone the Repository

```sh
git clone git@github.com:Monaam12/boilerplate-nodejs-graphQL-react.git
```

### Server Setup

1. Navigate to the server directory:

```sh
cd server
```

2. Install dependencies:

```sh
yarn
```

3. Spin up MongoDB using Docker Compose:

```sh
docker-compose up --build -d mongodb
```

4. Start the server:

```sh
yarn start
```

### Client Setup

1. Navigate to the client directory:

```sh
cd client
```

2. Install dependencies:

```sh
yarn
```

3. Start the client:

```sh
yarn start
```

## Additional Information

- **Server**: The server is powered by Node.js and utilizes GraphQL for handling API requests. MongoDB is used as the database, and it's spun up in a Docker container for easy setup.
  
- **Client**: The client side is built with React.js, providing a dynamic and interactive user interface. It's configured to communicate with the GraphQL server for fetching and managing data.

Feel free to customize and extend this boilerplate to suit your project's needs. Happy coding!
```
