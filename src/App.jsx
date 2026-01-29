import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Family from './pages/Family'
import Stories from './pages/Stories'
import Game from './pages/Game'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/family" element={<Family />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
