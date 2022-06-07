import React from 'react';
import {Navigate} from 'react-router-dom';

export function IsUserRedirect({
  user,
  loggedInPath,
  children,
  ...rest
}) {
  if (!user) {
    return children;
  }

  if (user) {
    console.log(user, loggedInPath, children, rest);
    return (
      <Navigate
        to={{
          pathname: loggedInPath,
        }}
      />
    );
  }
  return null;
}

export function ProtectedRoutes({user, children, ...rest}) {
  return ({location}) => {
    if (user) {
      return children;
    }
    if (!user) {
      return (
        <Navigate
          to={{
            pathname: 'signin',
            state: {from: location},
          }}
        />
      );
    }
    return null;
  };
}
