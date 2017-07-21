import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import Portfolio from '../portfolio'
import Calculators from '../calculators'
import Dashboards from '../dashboard'
import Charts from '../charts'
import Wallet from '../wallet'
import Menu from '../app/menu.jsx'
import Home from '../Home'

import Tickers from '../app/tickers.jsx';
import '../../css/App.css';
import '../../css/Menu.css';
import '../../css/Ticker.css';
import '../../css/Portfolio.css';
import '../../css/home.css';
import '../../css/responsive.css';
import '../../css/helpers.css';
import '../../css/App-dark.css';



const App = () => (
  <div className="parent" >
    <div className="App">
         <Tickers />
            <Menu/>
    </div>
    <main>
        <Redirect from="/" to="home" />
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/wallets" component={Wallet} />
        <Route path="/calculators" component={Calculators} />
        <Route path="/dashboards" component={Dashboards} />
        <Route path="/charts" component={Charts} />
    </main>
  </div>
);

export default App
