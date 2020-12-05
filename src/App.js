import React from 'react';
import { ProtectedRoute, UnprotectedRoute } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  SignIn,
  SignUp,
  NotFound,
  PrivacyPolicy,
  Dashboard,
  Products,
  AddProduct,
  Services,
  AddService
} from './pages'

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
        <ProtectedRoute path="/jasa">
          <Services />
        </ProtectedRoute>
        <ProtectedRoute path="/addService">
          <AddService />
        </ProtectedRoute>
        <ProtectedRoute path="/produk">
          <Products />
        </ProtectedRoute>
        <ProtectedRoute path="/addProduct">
          <AddProduct/>
        </ProtectedRoute>
        <ProtectedRoute path="/">
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
