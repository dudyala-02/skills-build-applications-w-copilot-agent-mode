# OctoFit Tracker

A modern multi-tier fitness tracking application with user authentication, activity logging, team management, and competitive leaderboards.

## Project Structure

```
octofit-tracker/
├── backend/          # Node.js/Express/TypeScript API server
├── frontend/         # React 19 + Vite + TypeScript UI
└── README.md
```

## Technology Stack

### Frontend (Port 5173)
- React 19
- Vite
- React Router DOM
- Bootstrap 5
- TypeScript

### Backend (Port 8000)
- Node.js (LTS)
- Express
- TypeScript
- MongoDB with Mongoose
- CORS & Dotenv

### Database (Port 27017)
- MongoDB

## Quick Start

### Backend Setup
```bash
cd octofit-tracker/backend
npm install
npm run dev
```

The backend will run on `http://localhost:8000`

### Frontend Setup
```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

### MongoDB Setup
Ensure MongoDB is running on port 27017:
```bash
ps aux | grep mongod
```

## Features

- 🔐 User authentication and profiles
- 📊 Activity logging and tracking
- 👥 Team creation and management
- 🏆 Competitive leaderboard
- 💪 Personalized workout suggestions

## Environment Variables

### Backend (.env)
```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:8000
VITE_API_VERSION=v1
```

## Development

### Run all services
- Terminal 1: `cd backend && npm run dev`
- Terminal 2: `cd frontend && npm run dev`
- Terminal 3: Ensure MongoDB is running

## API Health Check

```bash
curl http://localhost:8000/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "OctoFit Tracker API is running"
}
```

## License

ISC
