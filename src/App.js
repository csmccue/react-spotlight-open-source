import { Link, Route, Switch } from 'react-router-dom';
import RTable from './Table.js';
import Charts from './Charts.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route exact path="/table">
          <h1>Table Libary</h1>
          <RTable />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Charts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
