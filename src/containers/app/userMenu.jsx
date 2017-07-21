import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    darkModeFunction,
} from '../../modules/ui'

const UserMenu = props => (
    <div className="userMenu">
        <i className="icon-bulb" onClick={props.darkModeFunction} style={props.darkMode ? {color: 'white'} : {}}/>
        <i className="icon-settings"/>
        <i className="icon-user" />

    </div>
);

const mapStateToProps = state => ({
    darkMode: state.ui.darkMode,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    darkModeFunction,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserMenu)
