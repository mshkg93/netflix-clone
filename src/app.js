import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import {Home, Browse, SignUp, SignIn} from './pages';
import * as ROUTES from './constants/routes';
import {useAuthListener} from './hooks';

export default function App() {
  let {user} = useAuthListener();
  // let user;

  return (
    <Router>
      <Routes>
        <Route
          user={user}
          path={ROUTES.SIGN_IN}
          element={
            user ? <Navigate to={ROUTES.BROWSE} /> : <SignIn />
          }
        />
        <Route
          user={user}
          path={ROUTES.SIGN_UP}
          element={
            user ? <Navigate to={ROUTES.BROWSE} /> : <SignUp />
          }
        />
        <Route
          exact
          path={ROUTES.BROWSE}
          element={
            !user ? <Navigate to={ROUTES.SIGN_IN} /> : <Browse />
          }
        />
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route path='*' element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </Router>
  );
}
