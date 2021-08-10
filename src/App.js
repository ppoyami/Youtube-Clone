import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Header from './components/Home/Header';
import Sidebar from './components/Home/Sidebar';

import { ROUTES } from './constants';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path={ROUTES.home} component={Home} />
        <Route path={ROUTES.detail} component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
