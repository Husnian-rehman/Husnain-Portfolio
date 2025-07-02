import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Shop from './pages/shop';

function App() {
    return ( <
        >
        <
        Router >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/contact"
        element = { < Contact / > }
        /> <
        Route path = "/shop"
        element = { < Shop / > }
        /> <
        /Routes> <
        Footer / >
        <
        /Router> <
        />
    );
}

export default App;