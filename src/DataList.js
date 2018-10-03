import React, { Component } from 'react';
import { Project } from './Components';
import './App.css';

var Parser = require('html-react-parser')
var all_data = require('./activity-feed.json')

console.log(all_data.map(proj => proj.title))
all_data.sort(function(proj1, proj2) {
  var elems = ["startYear", "endYear", "startMonth", "endMonth"]
  for (var idx = 0; idx < elems.length; idx++) {
    var elem = elems[idx]
    if (proj1[elem] !== proj2[elem])
      return proj2[elem] - proj1[elem]
  }
  return 0
})

console.log(all_data.map(proj => proj.title))

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function numberRange (start, end) {
  return new Array(end - start).fill().map((d, i) => i + start);
}

function getStringDate(sMonth, sYear, eMonth, eYear) {
  if (sYear !== eYear)
    return months[sMonth - 1] + " " + sYear + " - " + months[eMonth - 1] + " " + eYear
  else if (sMonth !== eMonth)
    return months[sMonth - 1] + " - " + months[eMonth - 1] + " " + eYear
  return months[sMonth] + " " + sYear
}

class DataList extends Component {
  constructor() {
    super()
    this.state = { data: [] }
  }

  componentWillMount() {
    var needed_tag = this.props.reqTag
    var needed_year_start = this.props.reqStartYear
    var needed_year_end = this.props.reqEndtYear
    var start_month_range = this.props.startMonthRange
    var start_year_range  = this.props.startYearRange
    var end_month_range   = this.props.endMonthRange
    var end_year_range    = this.props.endYearRange
    var filter_fn = function(elem) {
      if ((needed_tag && !elem.tags.includes(needed_tag)) || 
          (needed_year_start && elem.startYear !== needed_year_start) ||
          (needed_year_end && elem.startYear !== needed_year_end)
         )
        return false
      if (start_month_range && start_year_range && end_month_range && end_year_range) {
        var startA = new Date(start_year_range, start_month_range - 1)
        var endA = new Date(end_year_range, end_month_range - 1)
        
        var startB = new Date(elem.startYear, elem.startMonth - 1)
        var endB = new Date(elem.endYear, elem.endMonth - 1)
        if (!(startA < endB && endA >= startB))
          return false
      }
      return true
    }
    this.setState({data: all_data.filter(filter_fn)})
  }
  
  render() {
    var elems = this.state.data
    var rows = numberRange(0, Math.round(elems.length / 2)).map(idx => idx * 2 + 1 < elems.length ? [elems[idx * 2], elems[idx * 2 + 1]] : [elems[idx * 2]])
    
    const rowstyle = {
      padding: '0',
    }
    
    return (
      <div>
        {rows.map(projs => 
          <div className="row" key={projs.map(proj => proj.title).join()}>
            <div className="col-lg-12" style={rowstyle}>
              {projs.map(proj =>
              <Project key={proj.title} title={proj.title}
                date={getStringDate(proj.startMonth, proj.startYear,
                                    proj.endMonth, proj.endYear)}
                link={proj.link}
                icon={require("./media/icons/" + proj.icon)}
                iconalt={proj.iconalt}>
                {Parser(proj.description)}
              </Project>)
              }
            </div>
          </div>)
        }
      </div>
    )
  }
}

export default DataList;

