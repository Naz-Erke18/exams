import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import "./darkMode.css";


function Themes() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </div>
  );
}
export default Themes;

const Button = styled.button`
  background-color: #7d7de7;
  border-radius: 15px;
  border: none;
  height: 40px;
  color: white;
  :hover{
    background-color: blue;
  }
`