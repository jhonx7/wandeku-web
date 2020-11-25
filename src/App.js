import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProtectedRoute from './components/auth/ProtectedRoute'
import UnprotectedRoute from './components/auth/UnprotectedRoute'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <Router>
        <Switch>
          <UnprotectedRoute path="/login">
            <SignIn />
          </UnprotectedRoute>
          <UnprotectedRoute path="/register">
            <SignUp />
          </UnprotectedRoute>
          <Route path="/privacyPolicy">
            <PrivacyPolicy />
          </Route>
          <ProtectedRoute path="/">
            <Dashboard />
          </ProtectedRoute>
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
