import { Route, Redirect } from "react-router-dom";

// context kullanmak için
import { useAuth } from "../contexts/authContext";

export default function PrivateRoute({ children, ...rest }) {
  const { auth } = useAuth();
  /*
	 // login değilken
	const auth = {};
	 */

  /* 
	// login iken
	const auth = {
		"username": "workintech",
		"role": "admin",
		"token": "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
	};
	 */

  console.log("privateRoute", auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.username ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
