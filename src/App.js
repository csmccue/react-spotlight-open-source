import { Link, Route, Switch } from 'react-router-dom';
import RTable from './Table.js';
import Charts from './Charts.js';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="success">THIS IS A BUTTON</Button>
      <TextField id="outlined-basic" label="hi Vic" variant="outlined"></TextField>
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <header>
      </header>
      <Switch>
        <Route exact path="/table">
          <h1>Table Library</h1>
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
