

import { useState, useEffect, createContext } from 'react';


import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


/* Commenting all the colors name */
// import { grey, blueGrey, red, pink, orange, deepOrange, brown, blue, lightBlue, purple, indigo, cyan,  green, lightGreen, teal, yellow, amber, lime } from '@mui/material/colors';


/* Importing only the color that I need in this file */
import { blueGrey } from '@mui/material/colors';



/* Importing all the children of the theme object*/
import { responsiveTypography } from './children/responsive-typography';
import { breakpointsValues } from './children/breakpoints';
import { theme_palette_text } from './children/palette/text';
import { theme_palette_primary } from './children/palette/primary';
import { theme_palette_secondary } from './children/palette/secondary';
import { theme_palette_error } from './children/palette/error';
import { theme_palette_warning } from './children/palette/warning';
import { theme_palette_success } from './children/palette/success';
import { theme_palette_info } from './children/palette/info';
import { theme_palette_grey } from './children/palette/grey';



// creating context for passing state and function which switches the theme mode
export const themeSwitchContext = createContext('')


// functional component
export default function MuiTheme({ children }) {


  // dark mode state 
  const [darkMode, setDarkMode] = useState('')


  // On first load, we will check the localStorage. If the user visited the website previously, theme will be set based on the previous preference. Otherwise, (if it's the first visit of the user)the  theme will be set to the light mode. */


  useEffect(() => {

    const existingPreference = localStorage.getItem("themeState");

    if (existingPreference) {
      existingPreference === 'dark'
        ? setDarkMode(true)
        : setDarkMode(false);
    }

    else {
      setDarkMode(false);
      localStorage.setItem("themeState", 'light');
    }

  }, []);




  // Anyone can manually switch the theme
  function switchTheme() {

    let themeState = localStorage.getItem('themeState');


    // When the localStorage's 'themeState' is 'dark', onClick we will  change the 'themeState' to 'light', also we will  change the 'darkMode' state, we will make it false, setDarkMode(false),  so that the theme of the website becomes light as well.

    if (themeState === 'dark') {

      localStorage.setItem('themeState', 'light')

      setDarkMode(false)

    }

    // Otherwise (When the localStorage's 'themeState' is  'light') ,onClick we will  change the 'themeState' to 'dark', also we will to change the 'darkMode' state, we will make it true, setDarkMode(true), so  that the theme of the website becomes dark as well.

    else {
      localStorage.setItem('themeState', 'dark')

      setDarkMode(true)
    }

  }



  // imported theme_palette_text function accepts an argument and returns a object (text), we are passing the 'darkMode' as the argument and storing the returned objects on the 'theme_palette_primary_obj' variable 
  const theme_palette_primary_obj = theme_palette_primary(darkMode)

  const theme_palette_secondary_obj = theme_palette_secondary(darkMode)

  const theme_palette_error_obj = theme_palette_error(darkMode)

  const theme_palette_warning_obj = theme_palette_warning(darkMode)

  const theme_palette_success_obj = theme_palette_success(darkMode)

  const theme_palette_info_obj = theme_palette_info(darkMode)

  const theme_palette_grey_obj = theme_palette_grey(darkMode)


  // imported theme_palette_text function accepts an argument and returns a object (text), we are passing the 'darkMode' as the argument and storing the returned objects on the 'theme_palette_text_obj' variable 
  const theme_palette_text_obj = theme_palette_text(darkMode)




  // imported breakpointsValues returns a object, we are storing the returned object on the 'breakpointsValues_obj' variable 
  const breakpointsValues_obj = breakpointsValues()


  // imported responsiveTypography returns many objects, we are storing the returned objects on the 'responsiveTypography_obj' variable 
  const responsiveTypography_obj = responsiveTypography()



  //  In the following section, we are changing some default styles of MUI theme. https://mui.com/material-ui/customization/default-theme/ 

  const muiUpdatedStyle = createTheme({


    //spacing, here factor = 1 = 0.5rem = 8px
    spacing: factor => `${0.5 * factor}rem`,

    breakpoints: {

      ...breakpointsValues_obj

    },


    palette: {



      mode: darkMode ? 'dark' : 'light',




      // this background object controls the background color of our application
      background: {

        /* There is a related file in the 'mui-theme/children' folder to this 'palette.background.default'. The file name is 'background-color.js' and how is that file related to this 'palette.background.default'  is described in detail in that file. */

        default: darkMode ? 'hsl(200, 20%, 16%)' : 'hsl(0, 0%, 99%)',

        // adding custom variation property here
        variation: darkMode ? 'hsl(200, 19%, 20%)' : 'hsl(0, 0%, 96%)',

        variation_2: darkMode ? 'hsl(200, 19%, 24%)' : 'hsl(0, 0%, 93%)',


        // when the paper's elevation is 0
        paper: darkMode ? 'hsl(200, 19%, 20%)' : 'hsl(0, 0%, 96%)',
      },









      // in the typography object, I am changing the fontFamily. But I had to make sure that I import the fontFamily that I use here. I have imported fontFamily in the 'styles/index.css' file.
      typography: {
        fontFamily: 'Source Sans Pro, sans-serif',
      },


      /* There is a related file in the 'mui-theme/children' folder to these primary and secondary objects. The file name is 'brand-color.js' and how is that file related to these primary and secondary objects is described in detail in that file. */


      // primary, secondary, error, warning, success, info
      ...theme_palette_primary_obj,

      ...theme_palette_secondary_obj,

      ...theme_palette_error_obj,

      ...theme_palette_warning_obj,

      ...theme_palette_success_obj,

      ...theme_palette_info_obj,

      // grey

      ...theme_palette_grey_obj,


      // text

      ...theme_palette_text_obj,





      /* Other than modifying existing properties' of default theme, we are also adding some new properties. But we are not defining the new properties in this file, we have defined them in some files inside the 'mui-theme/children' folder. */

      /* All the new properties that is being added here are objects too. And those objects have properties. In those properties, you will see t1, t2, v1, v2, etc. t1 means type 1, v1 means variant 1, opp means opposite_theme  */



      /* Files inside the 'mui-theme/children' folder export function. We have imported those function in this file. We have invoked the functions in the above. All those function returns object. We have stored those object in the above in variables. Now in the below, we are destructuring those object. */

    },


    typography: {

      //  destructuring
      ...responsiveTypography_obj

    }




  })






  return (

    <>

      {/* ThemeProvider is a MUI component which helps to change the default style of MUI. We made a variable (muiUpdatedStyle) where we have changed MUI default styles and added new styles. Now, we will pass the variable (muiUpdatedStyle) in the ThemeProvider component as prop.     */}


      <ThemeProvider theme={muiUpdatedStyle}>

        {/* CssBaseline is needed for dark and light theme to work perfectly*/}
        <CssBaseline>

          {/* We have created a context('themeSwitchContext') to switch the theme. The values are 'switchTheme' & 'darkMode' which will help to switch theme from light to dark and opposite_theme. */}

          <themeSwitchContext.Provider value={{ switchTheme, darkMode }}>

            {children}

          </themeSwitchContext.Provider>


        </CssBaseline>

      </ThemeProvider>



    </>

  )

}



