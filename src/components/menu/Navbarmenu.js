import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
function Navbarmenu(props) {
  const [isMenu, setisMenu] = useState(false);
  
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setSubMenu(false);
  };
 
  let boxClass = ["layout__menuitems layout__hidemenu "];
  if(isMenu) {
      boxClass.push('layout__visiblemenu');
  }else{
      boxClass.push('');
  }

  const [isSubMenu, setSubMenu] = useState(false);
  const SubmenuActiveClass = () => {
    setisMenu(false);
    setSubMenu(true);
  };
  
return(
  <header className="layout__header">
   <NavLink to="/" className="layout__logo">
      <i className="fa fa-fw fa-globe"></i>
    </NavLink>
    <nav className="layout__navBar ">
      {/* Responsive button */}
      <span className="layout__response__menubar" style={{ display: 'none' }} onClick={toggleClass} > <FaBars/> </span>

      <ul className={boxClass.join(' ')}>
        <li onClick={toggleClass}>
          <NavLink exact activeClassName='is-active' to="/pg_scp002">SCP-002</NavLink>
        </li>
        <li onClick={toggleClass}>
          <NavLink exact activeClassName='is-active' to="/pg_scp003">SCP-003</NavLink>
        </li>
      <li onClick={toggleClass}>
          <NavLink exact activeClassName='is-active' to="/pg_scp004">SCP-004</NavLink>
        </li>
        <li onClick={toggleClass}>
          <NavLink exact activeClassName='is-active' to="/pg_scp005">SCP-005</NavLink>
        </li>
        <li onClick={toggleClass}>
          <NavLink exact activeClassName='is-active' to="/pg_scp006">SCP-006</NavLink>
        </li>
                           
      </ul>
    </nav>
                  
  </header>
        );
    }

export default Navbarmenu;
