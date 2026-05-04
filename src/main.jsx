import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import 'animate.css';
import './styles.css';
import App from './App.jsx';
import { AuthProvider } from './providers/AuthProvider.jsx';
import Home from './pages/Home.jsx';
import Animals from './pages/Animals.jsx';
import AnimalDetails from './pages/AnimalDetails.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import MyProfile from './pages/MyProfile.jsx';
import UpdateProfile from './pages/UpdateProfile.jsx';
import NotFound from './pages/NotFound.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="animals" element={<Animals />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route
                path="details-page/:id"
                element={
                  <PrivateRoute>
                    <AnimalDetails />
                  </PrivateRoute>
                }
              />
              <Route
                path="my-profile"
                element={
                  <PrivateRoute>
                    <MyProfile />
                  </PrivateRoute>
                }
              />
              <Route
                path="update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Toaster position="top-center" />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
