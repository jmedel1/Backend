# Backend Server

This is the backend server for your chat application. It provides the necessary APIs to interact with the chat messages and perform actions such as adding messages, liking messages, and leaving comments.

## Prerequisites

Before running the backend server, make sure you have the following installed:

- Node.js (version X.X.X or higher)
- NPM (version X.X.X or higher)

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the backend server directory.
3. Install the dependencies by running the following command:

   ```bash
   npm install

4. Start the backend server with the following command:

    ```bash
    npm start
The server will start running on port 3000.

## API Endpoints
The backend server exposes the following API endpoints:

- GET /api/messages: Retrieve all chat messages.
- POST /api/messages: Add a new chat message.
- PUT /api/messages/:id/like: Like a chat message.
- PUT /api/messages/:id/comment: Add a comment to a chat message.

## Database
The backend server uses a JSON file (db.json) as the database to store the chat messages. The file is located in the root directory of the server.

## Contributing
If you'd like to contribute to the development of this backend server, you can follow these steps:

Fork the repository and clone it to your local machine.
Create a new branch for your feature or bug fix.
Implement your changes and test them thoroughly.
Commit and push your changes to your forked repository.
Submit a pull request with a detailed description of your changes.

## License
This project is licensed under the MIT License.