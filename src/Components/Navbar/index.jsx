import React from 'react';
import {Link} from 'react-router-dom';

const links = [
  {to:"/",title:"Home",},
  {to:"/contact",title:"Contact",},
  {to:"/about-us",title:"About",},
  {to:"/services",title:"Services",},
  {to:"/login",title:"Login",},
];

function NavBar() {
  return (
    <>
      {links.map(({to,title}) => {
        return <Link key={title} to={to}>{title}</Link>
      })}
    </>
  )
}

export default NavBar
