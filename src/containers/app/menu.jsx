import React from 'react';
import { Route, Link } from 'react-router-dom'


export default () => (

<div className="App-menu row">

    <div className="col-xs-2 col-xs-offset-1 item">
        <Link to="/calculators" className="">Calculators <i className="icon-calculator"/></Link>
    </div>

    <div className="col-xs-2 item">
        <Link to="/portfolio" className="">Portfolio<i className="icon-diamond"/></Link>
    </div>

    <div className="col-xs-2 item">
        <Link to="/dashboards" className="">Dashboard <i className="icon-speedometer"/></Link>
    </div>

    <div className="col-xs-2 item">
        <Link to="/charts" className="">Charts<i className="icon-graph"/></Link>
    </div>

    <div className="col-xs-2 item">
        <Link to="/wallets" className="">Wallets<i className="icon-wallet"/></Link>
    </div>
</div>

)