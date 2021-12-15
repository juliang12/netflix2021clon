import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Paypal from "./Pages/Paypal";
import Profile from "./Pages/Profile";
import { useEffect } from "react";
import { auth } from "./Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { StateContext } from "./Context/StateProvider";
import { TYPES } from "./Reducer/reducer";

function App() {
  const classes = useStyles();
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch({
          type: TYPES.USER,
          payload: userAuth,
        });
      }
    });
  }, [user]);

  return (
    <div className={classes.root}>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/checkout" element={<Paypal />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#111",
  },
}));

export default App;
