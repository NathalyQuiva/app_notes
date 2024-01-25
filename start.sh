#!/bin/bash

# Add node path to PATH
export PATH=$PATH:"/c/Program Files/nodejs"

# Check if Node.js and npm are installed
if ! command -v node &> /dev/null || ! command -v npm &> /dev/null; then
    echo "Node.js and npm are required to run the application. Install them before continuing."
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Initial setup for backend
echo "Installing backend dependencies..."
cd backend
npm install cors@2.8.5 dotenv@16.3.1 express@4.18.2 pg@8.11.3 pg-hstore@2.3.4 sequelize@6.35.2


# Start backend
echo "Starting backend server in the background and creating database and models..."
npm run dev & 
cd ..


# Initial setup for frontend
echo "Installing frontend dependencies..."
cd frontend
npm install axios@1.6.3 react@18.2.0 react-redux@9.0.4 react-scripts@5.0.1 redux@5.0.1 redux-thunk@3.1.0
cd ..

# Start frontend
echo "Starting frontend application..."
cd frontend
npm start  
cd ..

# Success message
echo "The application has been configured and is ready to be executed."
