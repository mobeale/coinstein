import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    incrementBtc
} from '../../modules/portfolio'

class Holdings extends React.Component {

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
                     <h1>{this.props.btc}</h1>
                     <button onClick={this.props.incrementBtc} disabled={this.props.isIncrementingBtc}>Increment</button>
                 </div>
             </div>
         </div>
     )
 }
}


const mapStateToProps = state => ({
    btc: state.portfolio.btc,
    isIncrementingBtc: state.portfolio.isIncrementingBtc
});

const mapDispatchToProps = dispatch => bindActionCreators({
    incrementBtc,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Holdings)
