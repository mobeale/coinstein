import React from 'react'
import { Route, Link } from 'react-router-dom'
import Overview from './overview.jsx'
import Holdings from './holdings.jsx'
import Chart from './chart.jsx'

const Portfolio = ({match}) => (
    <div>
        <div className="container">
            <div className="portfolio-menu">
                <div className="col-xs-4 text-right"><Link to={`${match.url}/overview`}>Overview</Link></div>
                <div className="col-xs-4 text-center"><Link to={`${match.url}/holdings`}>Holdings</Link></div>
                <div className="col-xs-4 text-left"><Link to={`${match.url}/chart`}>Chart</Link></div>
            </div>
        </div>
        <main>
            <Route path={`${match.url}/overview`} component={Overview}/>
            <Route path={`${match.url}/holdings`} component={Holdings}/>
            <Route path={`${match.url}/chart`} component={Chart}/>
        </main>
    </div>
);

export default Portfolio
