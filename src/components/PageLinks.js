import React from 'react'; 
import { pageLinks } from "../Data"; 
import PageLink from './PageLink';


const PageLinks = ({parentClass, itemClass}) => { 
  return (
    <ul className={parentClass} id="nav-links">
     
      {pageLinks.map((link) => { 
        return <PageLink key={link.id} link={link} itemClass={itemClass}/>;
      })}
    </ul>
  );
};


export default PageLinks; 
