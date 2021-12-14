import React, { useState } from "react";

export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {

    const themes = {
        color: '#000',
        background: '#fff'
    }

    const [theme, setTheme] = useState(themes)

    return ( 
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeProvider;