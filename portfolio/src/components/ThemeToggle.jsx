import React from 'react'
import {useState, useEffect} from 'react'
import{Sun, Moon} from 'lucide-react';
import {cn} from '../utils/constant.js'

const ThemeToggle= () => {
const[isDarkMode, setIsDarkMode] = useState(false);

useEffect(()=>{
  const storedTheme = localStorage.getItem("theme");
  if(storedTheme === "dark"){

    setIsDarkMode(true);
     document.documentElement.classList.add("dark");
  }

  else { 
    localStorage.setItem("theme", "light");
    setIsDarkMode(false);
  }
}, []);

const handleClick = ()=>{
   
  if(isDarkMode){
     document.documentElement.classList.remove("dark");
     localStorage.setItem("theme", "light");
    setIsDarkMode(false);
    
  }

  else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true);
  }
}
  return (
    <div>
        <button className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transtion-colors duration-300", "focus: outline-hidden")} onClick={handleClick}>{isDarkMode ? <Sun className = "h-6 w-6 text-yellow-300 cursor-pointer"/> : <Moon className="h-6 w-6 text-blue-950 cursor-pointer"/>}</button>
    </div>
  )
}

export default ThemeToggle;
