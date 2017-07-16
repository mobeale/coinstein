import React from 'react';
import UserMenu from './userMenu.jsx'

export default class Ticker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btcPrice: '£1400.00',
            ethPrice: '£110.00',
            ltcPrice: '£30.00',
            xrpPrice: '£0.123456'
        };
    }

    render(){
        return (
        <div className="App-header hidden-xs">
            <div className="row tickers">
                <div className="col-sm-10">
                    <div className="col-xs-3"><p>BTC: {this.state.btcPrice}</p><span className="plus"> + 8.4%</span></div>
                    <div className="col-xs-3"><p>ETH: {this.state.ethPrice}</p><span className="minus"> - 12%</span></div>
                    <div className="col-xs-3"><p>LTC: {this.state.ltcPrice}</p><span className="minus"> + 32%</span></div>
                    <div className="col-xs-3"><p>XRP: {this.state.xrpPrice}</p><span className="plus"> - 43%</span></div>
                </div>
                <div className="col-sm-2">
                    <UserMenu />
                </div>
            </div>
        </div>)
    }
}

