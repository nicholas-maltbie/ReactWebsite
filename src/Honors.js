import React, { Component } from 'react';
import { Cover } from './Components';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Treacery from './firstyear/Treachery'
import BCat from './firstyear/BearcatCoders'
import Gateway from './firstyear/Gateway'
import YearOneReview from './firstyear/yearinreview'
import Knee from './secondyear/Knee'
import Japan from './secondyear/Japan'
import YearTwoReview from './secondyear/SecondYearReview'
import './App.css';
import { DataList } from './DataList'

class Honors extends Component {
  render() {
    return (
      <div>
        <Route exact path="/UHP" component = { List } />
        <Route path="/UHP/Japan" component = { Japan }/>
        <Route path="/UHP/treachery" component = { Treacery }/>
        <Route path="/UHP/knee" component = { Knee }/>
        <Route path="/UHP/BearcatCoders" component = { BCat }/>
        <Route path="/UHP/intro" component = { Gateway }/>
        <Route path="/UHP/FirstReview" component = { YearOneReview }/>
        <Route path="/UHP/SecondReview" component = { YearTwoReview }/>
      </div>
    );
  }
}

const List = function () {
  return (
    <div>
    <Cover image={require("./media/backgrounds/honors.jpg")} height="35vh" />

    <h1 className="text-center center-block col-lg-12">
      Honors
    </h1>

    <h2 className="text-center center-block col-lg-12">
      Second Year
    </h2>

    <NavLink to="/UHP/SecondReview"><h2 className="text-left col-lg-offset-1 col-lg-11">
      Second Year In Review
    </h2></NavLink>
    
    <DataList reqTag="Honors" startMonthRange={8} startYearRange={2017} endMonthRange={8} endYearRange={2018}/>

    <h2 className="text-center center-block col-lg-12">
      First Year
    </h2>

    <NavLink to="/UHP/FirstReview"><h2 className="text-left col-lg-offset-1 col-lg-11">
      First Year In Review
    </h2></NavLink>

    
    <DataList reqTag="Honors" startMonthRange={8} startYearRange={2016} endMonthRange={8} endYearRange={2017}/>


    <div className="row"/>
    </div>
  )
}

export default Honors;
