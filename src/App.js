import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/pages/about' />
        <Route component={Projects} path='/pages/projects' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
