import React from 'react';


export default class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioValue: '£1234.56',
            portfolioValueChange: '+ £234.56 (12.3%)',
            portfolioChangePositive: true,
        };
    }



    render(){
        return (
            <div className="container portfolio-overview">
                <h1>{this.state.portfolioValue}</h1>
                <h3 className={this.state.portfolioChangePositive ? 'portfolio-value-change-positive' : 'portfolio-value-change-negative'}>{this.state.portfolioValueChange}</h3>
            </div>
        )
    }
}