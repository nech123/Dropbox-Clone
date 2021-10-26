import React, {useEffect, useState} from "react";
import { Container } from "./styles";
 

declare global {
    interface Window{
      toggleActiveMenu: (()=>void) | undefined;
    }
  }
const scrollThreshold = 300

 

const SideMenu: React.FC = ({children}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect (() => {
    function onScroll(){
      setScrollY(window.scrollY);
      setIsActive(false);
    }


    window.addEventListener('scroll', onScroll )
      return() => window.removeEventListener('scroll', onScroll)
   },[]);

   const classes = [
     isActive ? 'open' : '',
     scrollY < scrollThreshold ? 'scrollOpen' : '',
   ];

   const className = classes.join('  ').trim()

   function toggloActiveMenu(){
     setIsActive(prev => !prev);
   }

   window.toggleActiveMenu = toggloActiveMenu;


  return <Container className={className}> {children} </Container>;
};
   
export default SideMenu;