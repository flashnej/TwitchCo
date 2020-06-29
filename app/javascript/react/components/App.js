import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import AboutUs from './AboutUs/AboutUs';
import NavBar from './Containers/NavBar';
import ContactUs from './ContactUs/ContactUs';
import JobSeekers from './JobSeekers/JobSeekers';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import BlogShowPage from './Blog/BlogShowPage'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs}/>
          <Route exact path="/contact-us" component={ContactUs}/>
          <Route exact path="/job-seekers" component={JobSeekers}/>
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={BlogShowPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
