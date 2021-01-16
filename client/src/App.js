import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Main from './views/Main';
import Show from './views/Show';

function App() {
    return (
        <div className="App">
            <Router>
                <Main path="/" />
                <Show path="/products/:id" />
            </Router>
        </div>
    );
}

export default App;
