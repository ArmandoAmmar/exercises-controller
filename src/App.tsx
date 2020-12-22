import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Home from './components/Home';
import Header from './components/Header';
import { DBController } from './services/DBController';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
    // DBController.create();

    return (
        <>
            <GlobalStyle />
            <Header />
            <Home />
        </>
    );
};

render(<App />, mainElement);
