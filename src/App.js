import React from 'react';
import {BrowserRouter  , Router, Route} from 'react-router-dom';

import Navbar from './pages/Navbar';

import ViewStudent from './pages/ViewStudent';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';

import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <div className="App">
      <Navbar />
        <BrowserRouter>

          

          <Router>

            <Route path="/students" component={<ViewStudent/>} />
            <Route path="/add-students" component={<AddStudent/>} />
            <Route path="/edit-student/:id" component={<EditStudent/>} />

          </Router>
        </BrowserRouter>
    </div>
  );
}

export default App;
