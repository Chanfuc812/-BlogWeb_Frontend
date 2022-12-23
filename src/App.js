import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Footer from "./components/footer/Footer";



function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/about">{user ? <About /> : <Register />}</Route>
        <Route path="/contact">{user ? <Contact /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
          
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
