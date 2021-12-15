import { makeStyles, Typography } from "@material-ui/core";
import Logo from "../Assets/logo.png";
import HeroBanner from "../Assets/banner.png";
import { NetflixButton, NetflixInput } from "../Styled/StyledComponents";
import { useState } from "react";
import SignUp from "./SignUp";

const Login = () => {
  const classes = useStyles();
  const [login, setLogin] = useState(false);

  return (
    <div className={classes.root}>
      <img src={Logo} className={classes.logo} alt="logo" />
      <NetflixButton className={classes.button}>Iniciar Sesion</NetflixButton>
      <div className={classes.info}>
        {!login ? (
          <SignUp />
        ) : (
          <>
            <Typography variant="h2" gutterBottom>
              Unlimited films, TV, programmes and more.
            </Typography>
            <Typography variant="h5">
              Watch Anywhere, cancel at any time.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Typography>
            <div className={classes.inputBlock}>
              <NetflixInput placeholder="Email Address" />
              <NetflixButton>GET STARTED</NetflixButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${HeroBanner})`,
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "fixed",
    width: "150px",
    top: 0,
    left: 20,
    cursor: "pointer",
  },
  button: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
  },
}));
export default Login;
