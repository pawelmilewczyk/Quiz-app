import classes from "./App.module.scss";
import axios from "axios";
import Menu from "./containers/Menu/Menu";

function App() {
  // const instance = axios.create({
  //   baseURL: "https://quizapi.io/api/v1/questions",
  //   params: {
  //     apiKey: "tygm5wOzRUEC8rkoLMWhPh6GvKr6UA9KX3GOCqvn",
  //     // category: linux, SQL, DevOps, Docker, Code, CMS,
  //     tags: "HTML",
  //     //tags: JavaScript, DevOps, HTML, Linux, Docker, PHP
  //     limit: 10,
  //     difficulty: "easy",
  //   },
  // });
  // instance
  //   .get()
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));

  return (
    <div className={classes.App}>
      <Menu />
    </div>
  );
}

export default App;
