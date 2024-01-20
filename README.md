# ChatNow Application

## Overview

ChatNow is a real-time chat application that allows users to communicate with each other. Search for members, Chat with others, and share files!!

- [Backend](#backend)
- [Frontend](#frontend)
- [Socket](#socket)

### Backend

The backend is built with Node.js and MongoDB. It provides API endpoints for user authentication, conversation management, file uploads, and messaging. The server utilizes Socket.io for real-time communication.

#### Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Socket.io

#### Prerequisites

Make sure you have Node.js and MongoDB installed on your system.

### Frontend

The frontend is developed using React and Material-UI. It features a user-friendly interface for chatting, account management, and more.

#### Technologies Used

- React
- Material-UI
- Axios
- Socket.io Client

## Backend

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/ChatNow.git
    ```

2. Navigate to the backend folder:

    ```bash
    cd ChatNow/backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

### Backend Configuration

1. In the `backend/db.js` file, inside the `Connection` function, replace the placeholder URL with your MongoDB connection string.

    ```javascript
    const URL = `your_mongodb_connection_string_here`;
    ```

2. In the `backend/.env` file, paste your corresponding MongoDB credentials.

    ```ini
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    ```

## Frontend

### Installation

1. Navigate to the frontend folder:

    ```bash
    cd ChatNow/frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

## Socket

### Installation

1. Navigate to the frontend folder:

    ```bash
    cd ChatNow/socket
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the Socket.io server:

    ```bash
    npm start
    ```

Now that you have successfully set up the backend, frontend, and Socket.io server, the ChatNow application is ready to run. Open your browser to start chatting in real-time!

If you encounter any issues or have questions, please refer to the relevant sections in this documentation or reach out to [mk2878771@gmail.com].

Happy chatting!
