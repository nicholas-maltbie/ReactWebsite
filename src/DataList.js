import React, { Component } from 'react';
import { Project } from './Components';
import './App.css';

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
    var filter_fn = function(elem) {
      var flag = true
      if(needed_tag && !elem.tags.includes(needed_tag))
        flag = false
      return flag
    }
    this.setState({data: require('./activity-feed.json').filter(filter_fn)})
  }
  
  render() {
    var elems = this.state.data
    var rows = numberRange(0, Math.round(elems.length / 2)).map(idx => idx * 2 + 1 < elems.length ? [elems[idx * 2], elems[idx * 2 + 1]] : [elems[idx * 2]])
    
    console.log(rows)
    const rowstyle = {
      padding: '0',
    }
    
    return (
      <div>
        {rows.map(projs => 
          <div className="row">
            <div className="col-lg-12" style={rowstyle}>
              {projs.map(proj =>
              <Project title={proj.title}
                date={getStringDate(proj.startMonth, proj.startYear,
                                    proj.endMonth, proj.endYear)}
                link={proj.link}
                icon={require("./media/icons/" + proj.icon)}
                iconalt={proj.iconalt}>
                {proj.description}
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

