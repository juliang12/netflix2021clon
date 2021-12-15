import {
  AppBar,
  Avatar,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import banner from "../Assets/banner.png";
import logo from "../Assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const history = useNavigate();
  const [show, setShow] = useState(false);

  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`${classes.root} ${show && classes.transparent}`}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={() => history("/")}>
          <img src={logo} alt="logo" className={classes.logo} />
        </IconButton>

        <Avatar
          onClick={() => history("/profile")}
          variant="square"
          style={{ cursor: "pointer" }}
        />
      </Toolbar>
    </AppBar>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
    top: 0,
    left: 0,
    right: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  transparent: {
    backgroundColor: "transparent",
  },

  logo: {
    width: "100px",
    cursor: "pointer",
  },
}));
export default Header;
