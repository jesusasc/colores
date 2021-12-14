import React, { useState } from "react";
import { ThemeContext } from "../Context/ThemeProvider";

const Navbar = () => {
    //const [colorfondo, setColorFondo] = useState('')
    //const [colorletra, setColorletra] = useState('')
    const {theme, setTheme} = React.useContext(ThemeContext)

    return (
        <div style = {
            {
                background: theme.background,
                color: theme.color
            }
        }>
            <h1>Navbar</h1>
            <p>Color de Fondo 
                <input
                    type="color"
                    onChange={e => setTheme({...theme, background: e.target.value})}
                />
                Color de Letra
                <input
                    type="color"
                    onChange={e => setTheme({...theme, color: e.target.value})}
                />
            </p>
        </div> 
     );
}
 
export default Navbar;