import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Styles from './App.module.scss'
import Layout from './components/Layout/Layout';
import Create from './pages/Create/Create';
import HomePage from './pages/HomePage/HomePage';
function App() {
  return (
    <div className={Styles.app}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/:id" exact>
              <Create/>
            </Route>
            <Route path='/' exact>
              <HomePage/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
