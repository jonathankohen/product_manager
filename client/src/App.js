import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Main from './views/Main';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
    return (
        <div className="App">
            <Router>
                <Main path="/" />
                <Show path="/products/:id" />
                <Edit path="/products/edit/:id" />
            </Router>
        </div>
    );
}

export default App;
