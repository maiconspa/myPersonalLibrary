import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

import Home from './pages/home'
import LandingPage from './pages/landingPage'

const App = () =>
  useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/home", element: <Home /> },
    { path: "/home/:filter", element: <Home /> }
  ]);

export default App;
