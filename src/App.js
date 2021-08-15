import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Header from './components/Common/Header';
import Sidebar from './components/Common/Sidebar';

import { ROUTES } from './constants';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Switch>
        {/* TODO: 2. RouteWithLayout 으로 교체한다. */}
        <Route exact path={ROUTES.home} component={Home} />
        <Route exact path={ROUTES.search} component={Home} />
        <Route path={ROUTES.detail} component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
