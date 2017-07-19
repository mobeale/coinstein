import React from 'react';

export default class Holdings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            btcHoldings: '10.234',
        }
    }



 render(){
     return (
         <div className="container portfolio-holdings">
             <div className="row">
                 <div className="col-sm-12">
                     <div className="col-xs-3"><a>BTC</a></div>
                     <div className="col-xs-3"><a>ETH</a></div>
                     <div className="col-xs-3"><a>LTC</a></div>
                     <div className="col-xs-3"><a>XRP</a></div>
                 </div>
             </div>
             <div className="row">
                 <div className="col-sm-12">
                     <h1>{this.state.btcHoldings}</h1>
                 </div>
             </div>
         </div>
     )
 }
}
