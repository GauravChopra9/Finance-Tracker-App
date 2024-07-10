# Finance Tracker App

## Overview
The Finance Tracker App is a comprehensive application designed to help users track their finances effectively. It provides features for recording income and expenses, categorizing transactions, and visualizing financial data. This application uses React for the frontend, Express and Node.js for the backend, and MongoDB for the database.

The code is mainly organized into 2 main folders: client for handling the frontend and sever handling the backend functioanlity respectively

## Features

- User authentication and authorization
- Record and categorize income and expenses
- View financial summaries and charts
- Responsive design for mobile and desktop
- Secure storage of user data

## Technologies Used
- Frontend: React, HTML, CSS, JavaScript
- Backend: Express, Node.js
- Database: MongoDB
- Authentication: Clerk API

## Installation
### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/GauravChopra9/finance-tracker.git
   cd finance-tracker
   ```

2. Navigate to backend directory:
   ```bash
   cd backend
   ```

3. Install backend dependencies:
   ```bash
   npm install
   ```

4. Create a .env file and add the following:
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
5. Start the Backend server
   ```bash
   npm start
   ```

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install frontend dependencies:
   ```bash
  npm install
   ```

3. Start the frontend development server:
  ```bash
  npm start
   ```
   


