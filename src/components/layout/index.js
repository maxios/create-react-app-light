import React from 'react';
import Tab from 'components/tab';
import { Link } from 'react-router-dom';

const Layout = props => {
  return (
    <div>
      <Link to="/"><Tab/></Link>
      <Link to="/second-view"><Tab/></Link>
      {props.children}
    </div>
  )
}

export default Layout;
