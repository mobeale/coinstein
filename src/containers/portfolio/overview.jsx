import React from 'react';


export default class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioValue: '£1234.56',
            portfolioValueChange: '+ £234.56 (12.3%)',
            portfolioChangePositive: true,
            btcHoldings: '10.234',
            ltcHoldings: '230',
            ethHoldings: '85',
            xprHoldings: '2345'
        };
    }



    render(){
        return (
            <div className="container portfolio-overview">
                <div className="col-sm-12">
                    <h1>{this.state.portfolioValue}</h1>
                    <h3 className={this.state.portfolioChangePositive ? 'portfolio-value-change-positive' : 'portfolio-value-change-negative'}>{this.state.portfolioValueChange}</h3>
                </div>
                <div className="col-sm-12 overview-timescales">
                    <div className="col-xs-1 col-xs-offset-1"><a>1H</a></div>
                    <div className="col-xs-1"><a>12H</a></div>
                    <div className="col-xs-1"><a>1D</a></div>
                    <div className="col-xs-1"><a>3D</a></div>
                    <div className="col-xs-1"><a>1W</a></div>
                    <div className="col-xs-1"><a>1M</a></div>
                    <div className="col-xs-1"><a>3M</a></div>
                    <div className="col-xs-1"><a>6M</a></div>
                    <div className="col-xs-1"><a>1Y</a></div>
                    <div className="col-xs-1"><a>ALL</a></div>
                </div>
                <div className="col-sm-12 overview-breakdown">
                    <div className="col-xs-6 col-sm-3">
                        <a>BTC</a>
                        <h3>{this.state.btcHoldings}</h3>
                        <p>Add <i className="icon-plus"/></p>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <a>LTC</a>
                        <h3>{this.state.ltcHoldings}</h3>
                        <p>Add <i className="icon-plus"/></p>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <a>ETH</a>
                        <h3>{this.state.ethHoldings}</h3>
                        <p>Add <i className="icon-plus"/></p>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <a>XRP</a>
                        <h3>{this.state.xprHoldings}</h3>
                        <p>Add <i className="icon-plus"/></p>
                    </div>
                </div>
            </div>
        )
    }
}