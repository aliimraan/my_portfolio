import React from 'react'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch} from 'react-router-dom'
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import SingleProject from './components/SingleProject';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/single-project/:id" component={SingleProject}/>
    </Switch>
    </div>
  );
}

export default App;
