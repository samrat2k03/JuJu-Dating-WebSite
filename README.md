# JuJu-Dating-WebSite

Welcome to Juju Dating, a modern dating website built using the MERN (MongoDB, Express.js, React, Node.js) stack! 

## Getting Started

Follow these instructions to get a local copy of the Juju Dating project up and running on your machine for development and testing purposes.

### Prerequisites

- Node.js: [Download and install Node.js](https://nodejs.org/)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/samrat2k03/JuJu-Dating-WebSite.git
   ```
2. Run sever
   Navigate to the server directory:
   ```bash
   cd server
   ```
   Start the server
   ```bash
   yarn start
   ```
4. run client (Frontend)
   Navigate to the client directory:
   ```bash
   cd client
   ```

   install dependencies:
   ```bash
   yarn
   ```

   Start the client:
   ```bash
   yarn dev
   ```

### Installation for Docker environment
#### Start the docker:
If you can use Make command:
```
   make docker-up
```
If you don't have Make
```
   docker compose up
```

#### Stop the docker:
If you can use Make command:
```
   make docker-down
```
If you don't have Make
```
   docker compose down
```


#### Exec into the docker container:
Connect to the server:
```
   make connect-to-server
   OR
   docker exec -it node_server bash
```
Connect to the client
```
   make connect-to-client
   OR
   docker exec -it node_client bash
```

### Configure environment variables:
modify `.env` file in the server directory with the following content:

```bash
PORT = 3001
DB = place your mongodb uri
JWT_TOKEN = your_jwt_secret (or) just give strong string of characters
```
🛠️ Customize the placeholders with your actual values for a seamless experience.

### Contribution
We welcome contributions from the community to make Juju Dating Website even better. If you'd like to contribute, please:

#### Fork the repository.
- Create a new branch for your feature or bug fix.
-  Make your changes and submit a pull request.
- For major changes, please open an issue first to discuss your ideas and proposed changes.

> I've create a just a login & signup page 
- contribution based on Enhancing the dating website's functionality.
- add new features of this project

### License
This project is licensed under the MIT License - see the LICENSE file for details.

<p align="center">Peace ✌</p>
