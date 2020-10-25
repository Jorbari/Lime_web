import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { getToken } from "../../api/helpers";

const GuestRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: `/dashboard` }} />
        )
      }
    />
  );
};

GuestRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object
};

export default GuestRoute;
