import React, { Component } from 'react';

const HorizLinks = ({ name }) => (
  <div className="row">
    <div className="Horiz-link col-xs-12 col-sm-8 col-md-6 col-lg-5">
        <h1>{name}</h1>
    </div>
  </div>
);

const Cover = function ({ children, image, height }) {
  var divstyle = {
    backgroundImage: `url(${image})`,
    height: `${height}`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '100px',
    backgroundColor: '#FFF',
  };
  return (
    <div style={divstyle}>
      { children }
    </div>
  )
}

export { Cover, HorizLinks }
