import React from 'react';
import { Link } from 'react-router-dom'


const Menu = () => (

<div className="App-menu row">

    <div className="col-sm-2 col-sm-offset-1 item">
        <Link to="/calculators">Calculators <i className="icon-calculator"/></Link>
    </div>

    <div className="col-sm-2 item">
        <Link to="/portfolio">Portfolio<i className="icon-diamond"/></Link>
    </div>

    <div className="col-sm-2 item">
        <Link to="/dashboards" className="">Dashboard <i className="icon-speedometer"/></Link>
    </div>

    <div className="col-sm-2 item">
        <Link to="/charts" className="">Charts<i className="icon-graph"/></Link>
    </div>

    <div className="col-sm-2 item">
        <Link to="/wallets" className="">Wallets<i className="icon-wallet"/></Link>
    </div>
</div>

);

export default Menu