import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Main2 from './views/Main2';
import Show from './views/Show';
import Edit2 from './views/Edit2';

function App() {
    return (
        <div className="App">
            <Router>
                <Main2 path="/" />
                <Show path="/products/:id" />
                <Edit2 path="/products/edit/:id" />
            </Router>
        </div>
    );
}

export default App;
