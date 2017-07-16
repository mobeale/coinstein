import React from 'react';
import { Route } from 'react-router-dom'
import Portfolio from '../portfolio'
import Calculators from '../calculators'
import Dashboards from '../dashboard'
import Charts from '../charts'
import Wallet from '../wallet'
import Menu from '../app/menu.jsx'
import Tickers from '../app/tickers.jsx';
import Overview from '../portfolio/overview.jsx'
import Holdings from '../portfolio/holdings.jsx'
import '../../css/App.css';
import '../../css/Menu.css';
import '../../css/Ticker.css'
import '../../css/Portfolio.css'


const App = () => (
  <div>
    <div className="App">
         <Tickers />
            <Menu/>
    </div>
    <main>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/wallets" component={Wallet} />
        <Route path="/calculators" component={Calculators} />
        <Route path="/dashboards" component={Dashboards} />
        <Route path="/charts" component={Charts} />
    </main>
  </div>
);

export default App
