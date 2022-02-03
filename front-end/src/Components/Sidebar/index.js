import React, {useState} from "react";
import { useGlobalContext } from "../../Context/appContext";
import "./sidebar.css";
import {tabsTitle} from "../../Data/tabsTitle";
import {Link} from "react-router-dom";
;
const Sidebar = () => {
    const {} = useGlobalContext();
    const [value, setValue] = useState(0)

    return(
        <div className="sidebar">
          <p className="menu">Menu</p>
           {tabsTitle.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`tab-btn ${index === value && 'active-tab'}`}
                >
                     <Link to={item.path}>{item.title}</Link>
                </button>
              )
            })}
        </div>
    )}
export default Sidebar;