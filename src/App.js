import { Link, Route, Switch } from 'react-router-dom';
import Table from './Table.js';
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
          <Table />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
