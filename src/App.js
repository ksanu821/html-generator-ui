import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Styles from './App.module.scss'
import Layout from './components/Layout/Layout';
import Create from './pages/Create/Create';
function App() {
  return (
    <div className={Styles.app}>
      <Router>
        <Layout>
          <Switch>
            <Route path='/' exact>
              <Create/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
