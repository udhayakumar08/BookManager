import React from 'react';
import Header from './components/Header'
import { BrowserRouter, Route, Link,Switch} from "react-router-dom";
import './index.css'
import Booklist from './components/Booklist';
import AddBook from './components/AddBook';
import Register from './components/Register';
import Login from './components/Login';
import Delete from './components/Delete';

function App() {
  return (<>
        <div>
            <Header/><br/><br/>
            
        </div>
    <div>
    
      <Switch>
        <Route exact path="/" component={Booklist}></Route>
        <Route path="/Booklist" component={Booklist}></Route>
        <Route path="/Addbook" component={AddBook}></Route>
        <Route path="/Register" component={Register}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Delete" component={Delete}></Route>
      </Switch>

    </div>
    </>
  );
}

export default App;
