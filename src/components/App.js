import React from 'react';
import Header from './Header';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import "./app.css";
import Home from './Home';
function App() {
  return (
    <div className="app-container">
       <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
