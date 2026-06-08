import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Home page component
function Home() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4">OctoFit Tracker</h1>
          <p className="lead">Track your activities, compete with your team, and reach new fitness goals.</p>
          <button className="btn btn-primary btn-lg" disabled>
            Backend Status: Connecting to {apiUrl}
          </button>
        </div>
      </div>
    </div>
  )
}

// About page component
function About() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>About OctoFit Tracker</h2>
          <p className="mt-3">
            OctoFit Tracker is a modern multi-tier fitness application featuring:
          </p>
          <ul>
            <li>User authentication and profiles</li>
            <li>Activity logging and tracking</li>
            <li>Team creation and management</li>
            <li>Competitive leaderboard</li>
            <li>Personalized workout suggestions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">
              🐙 OctoFit Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="bg-dark text-white py-4 mt-auto">
          <div className="container text-center">
            <p>&copy; 2024 OctoFit Tracker. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
