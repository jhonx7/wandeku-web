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
  AddService,
  DetailService,
  ListEmployees
} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/notfound">
          <NotFound />
        </Route>
        <UnprotectedRoute path="/login">
          <SignIn />
        </UnprotectedRoute>
        <UnprotectedRoute path="/register">
          <SignUp />
        </UnprotectedRoute>
        <Route path="/privacyPolicy">
          <PrivacyPolicy />
        </Route>
        <ProtectedRoute path="/jasa/:id">
          <DetailService />
        </ProtectedRoute>
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

        <ProtectedRoute path="/pegawai">
          <ListEmployees />
        </ProtectedRoute>

        <ProtectedRoute path="/">
          <Dashboard />
        </ProtectedRoute>
        <Route path="/notfound">
          <NotFound />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
