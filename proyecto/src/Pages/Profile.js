import {
  Avatar,
  makeStyles,
  Typography,
  useFormControl,
} from "@material-ui/core";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Plans from "../Components/Plans";
import { StateContext } from "../Context/StateProvider";
import { auth } from "../Firebase/firebase";
import { NetflixButton } from "../Styled/StyledComponents";

const Profile = () => {
  const classes = useStyles();
  const history = useNavigate();
  const { state } = useContext(StateContext);
  const { user } = state;

  const signout = () => {
    signOut(auth);
    history("/login");
  };
  return (
    <div className={classes.root}>
      <Header />
      <Typography variant="h3">Edit Profile</Typography>
      <div className={classes.info}>
        <Avatar className="img" />
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant="h6">
              {user ? user.email : "Anonimo"}
            </Typography>
            <Typography className={classes.plansText} variant="h5" gutterBottom>
              Plans
            </Typography>
            <Plans cost={7.99}>Netflix Standard</Plans>
            <Plans cost={11.99}>Netflix Basic</Plans>
            <Plans wide="medium" color="gray" cost={15.99}>
              Netflix Premium
            </Plans>
            <NetflixButton wide="fullWidth" onClick={() => signout()}>
              Sign Out
            </NetflixButton>
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
    width: "80%",
    display: "flex",
    "& img": {
      height: "100px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  details: {
    width: "100%",
    margin: theme.spacing(3),
    "& h6": {
      backgroundColor: "#aaa",
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: "18px",
    },
  },
  plans: {
    width: "100%",
  },
  plansText: {
    borderBottom: "1px solid lightgray",
  },
}));
export default Profile;
