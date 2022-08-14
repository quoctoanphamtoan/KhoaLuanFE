import { Redirect, Route } from "react-router";
import authentication from "../auth/authentication";

export const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authentication.isAuthentication === true) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
