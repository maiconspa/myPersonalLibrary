import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import LandingPage from './pages/landingPage'

const App = () => {
  return <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
  </Router>
}

export default App;
