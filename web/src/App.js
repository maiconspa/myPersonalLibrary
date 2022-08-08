import { BrowserRouter as Router, useRoutes } from 'react-router-dom'

import Home from './pages/home'
import LandingPage from './pages/landingPage'
import NotFoundPage from './pages/notFound';

const App = () =>
  useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/home/:filter", element: <Home /> },
    { path: "*", element: <NotFoundPage/> }
  ]);

export default App;