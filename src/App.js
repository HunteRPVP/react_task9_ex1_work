import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import loading from "./1487.gif";

// const ProfileDetails = lazy(() => import("./ProfileDetails"));
// const ProfilePosts = lazy(() => import("./ProfilePosts"));

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Location = lazy(() => import("./Location"));
const Posts = lazy(() => import("./Posts"));
const NotFound = () => <h1>404 Страница не найдена</h1>;

const Spinner = () => (
  <img
    src={loading}
    alt="loading..."
    loop="infinite"
    style={{ width: "50px", margin: "auto", display: "block" }}
  />
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about/:id(\d{1})/:name?"  component={About} exact />
            <Route path="/about/:id(\d{1})/:name?/:category-:weight?"  component={About} exact />
            <Route path="/location" component={Location} />
            <Route path="/posts" component={Posts} />
            <Route path="/notFound" component={NotFound} />
            <Redirect from="/404" to="/notFound" strict />
            <Route component={() => <h1>Что-то пошло не так</h1>} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
