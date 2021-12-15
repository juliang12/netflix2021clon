import { Button, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import requests from "../Helpers/Request";

const Banner = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState([]);

  const truncate = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)}...` : string;

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchOriginalsNetflix);
      //tenemos un array de peliculas en request.data.results
      //generamos un numero random entre 0 y la longitud del array, para obtener un indice aleatorio
      const random = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      //mostraremos en pantalla este request.data.results [random]
      setMovie(request.data.results[random]);
      return request;
    };
    fetchData();
  }, []);
  console.log(movie);

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          {movie?.title || movie?.name || movie?.original_name}
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography className={classes.description} variant="h6">
          {truncate(movie?.overview, 160)}
          Movie Description
        </Typography>
        <div className={classes.faceBottom}></div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "550px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  buttons: {
    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontWright: 700,
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "rgba(51,51,51, 0.5)",
    },
    "&& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    },
  },
  faceBottom: {
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
  },

  content: {
    height: "550px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    alignContent: "center",
    paddingTop: theme.spacing(10),
    marginLeft: theme.spacing(3),
    maxWidth: "50ch",
  },
}));
export default Banner;
