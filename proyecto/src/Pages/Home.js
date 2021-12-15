import { makeStyles } from "@material-ui/core";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import Rows from "../Components/Rows";
import requests from "../Helpers/Request";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchOriginalsNetflix}
        isLargeRow
      />
      <Rows title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Rows title="ROMANCE" fetchUrl={requests.fetchRomance} />
      <Rows title="HORROR" fetchUrl={requests.fetchHorror} />
      <Rows title="COMEDY" fetchUrl={requests.fetchComedy} />
      <Rows title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      <Rows title="ACTION" fetchUrl={requests.fetchAction} />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {},
}));
export default Home;
