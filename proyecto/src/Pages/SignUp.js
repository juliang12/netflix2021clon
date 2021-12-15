import { makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { auth } from "../Firebase/firebase";
import { NetflixButton, NetflixInput } from "../Styled/StyledComponents";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      history("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      history("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">
        Sign In
      </Typography>
      <form className={classes.form}>
        <NetflixInput
          placeholder="Email"
          className={classes.email}
          value={email}
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <NetflixInput
          placeholder="Password"
          className={classes.password}
          value={password}
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <NetflixButton onClick={signIn} type="submit" wide="medium" radius>
          Sign In
        </NetflixButton>

        <Typography variant="subtitle2">
          New to Netflix? {""}
          <span className={classes.signupLink} onClick={register}>
            Sign Up Now{""}
          </span>
        </Typography>
      </form>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    "& h5": {
      marginTop: theme.spacing(2),
      width: "70%",
    },
  },
  form: {
    width: "80%",
  },
  email: {
    marginBottom: theme.spacing(2),
  },
  password: {
    marginBottom: theme.spacing(4),
  },
  signupLink: {
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
export default SignUp;
