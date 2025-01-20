# Backend Repository: User Management API

This project is a backend application built with **Express.js** and integrated with **Firebase** to manage user data. It includes endpoints to fetch and update user information stored in **Firestore**. The project also supports local testing using Firebase Emulator.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Firebase Setup](#firebase-setup)
- [Directory Structure](#directory-structure)
- [API Documentation](#api-documentation)
  - [Endpoints](#endpoints)
- [Testing Locally](#testing-locally)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Manage user data with Firestore:
  - Fetch user details.
  - Update user details.
- Middleware for token validation using Firebase Authentication.
- Local API testing using Firebase Emulator.
- Clean and modular project structure for scalability.

---

## Tech Stack

- **Node.js**: JavaScript runtime.
- **Express.js**: Web application framework.
- **Firebase**: Backend-as-a-Service (BaaS).
- **TypeScript**: Strongly typed JavaScript.
- **Firestore**: NoSQL database for storing user data.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or later)
- npm (v8 or later)
- Firebase CLI (v11 or later)

---

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mikenath223/users-data-be
   cd users-data-be
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key
FIRESTORE_COLLECTION=USERS
```

Replace `your_project_id`, `your_client_email`, and `your_private_key` with values from your Firebase project.

### Firebase Setup

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Initialize Firebase in the project:

   ```bash
   firebase init
   ```

3. Select the following options during initialization:
   - **Functions**: Configure and deploy Cloud Functions.
   - **Emulators**: Set up Firebase Emulator for local testing.

---

## Directory Structure

```plaintext
users-data-be/
├── config/
│   └── firebaseConfig.ts       # Firebase initialization
├── controller/
│   └── api.ts                  # Handlers for API endpoints
├── core/
│   └── app.ts                  # Express app setup
├── entities/
│   └── user.ts                 # User object interface
├── middleware/
│   └── authMiddleware.ts       # Token validation middleware
├── repository/
│   └── userCollection.ts       # Firestore operations
├── routes/
│   └── userRoutes.ts           # API route definitions
├── .env                        # Environment variables
├── package.json                # Project metadata and dependencies
└── tsconfig.json               # TypeScript configuration
```

---

## API Documentation

### Endpoints

1. **Fetch User Data**

   - **URL**: `/user/:id`
   - **Method**: `GET`
   - **Description**: Fetches user data by user ID.
   - **Request Headers**:
     - `Authorization`: `Bearer <token>`
   - **Response**:
     - Success: `200 OK`
     - Error: `404 Not Found` or `500 Internal Server Error`

2. **Update User Data**

   - **URL**: `/user/:id`
   - **Method**: `PUT`
   - **Description**: Updates user data by user ID.
   - **Request Headers**:
     - `Authorization`: `Bearer <token>`
   - **Request Body**:
     ```json
     {
       "name": "John Doe",
       "email": "johndoe@example.com"
     }
     ```
   - **Response**:
     - Success: `200 OK`
     - Error: `500 Internal Server Error`

---

## Testing Locally

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the Firebase Emulator:

   ```bash
   firebase emulators:start --only functions
   ```

3. Test the API using a tool like Postman or cURL:
   - Base URL: `http://localhost:5001/<your-project-id>/us-central1/app`

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Create a Pull Request.

---

# Author
-------------------------


**Michgolden Ukeje**  [LinkedIn Profile](https://www.linkedin.com/in/michgoldenukeje/)  

---

## License

This project is licensed under the [MIT License](LICENSE).
