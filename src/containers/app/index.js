import React from 'react';
import { Route, Link } from 'react-router-dom'
import Portfolio from '../portfolio'
import Calculators from '../calculators'
import Dashboards from '../dashboard'
import Charts from '../charts'
import Wallet from '../wallet'
import Menu from '../app/menu.jsx'
import Tickers from '../app/tickers.jsx';
import '../../css/App.css';
import '../../css/Menu.css';
import '../../css/Ticker.css'

const App = () => (
  <div>
    <div className="App">
         <Tickers />
        <Menu/>
    </div>
    <main>
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/calculators" component={Calculators} />
        <Route exact path="/dashboards" component={Dashboards} />
        <Route exact path="/charts" component={Charts} />
        <Route exact path="/wallets" component={Wallet} />
    </main>
  </div>
);

export default App
