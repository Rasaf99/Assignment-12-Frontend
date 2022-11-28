import { deepOrange, teal } from '@mui/material/colors';

/* 🔖 All available MUI colors:

grey, blueGrey, red, pink, orange, amber, brown, blue, lightBlue, purple, indigo, cyan,  green, lightGreen, teal, yellow, deepOrange, lime

*/


/* 🔖 Brand color is an alternative to the primary & the secondary color. Here, the type 1 is the primary color and the type 2 is the secondary color. I have made these brand color so that I can have more variations of primary and secondary color if I want. Moreover, here I have opposite_theme color which will be helpful when I want to use secondary color over a primary color or a primary color over a secondary color. 

In MUI, primary color has 3 variations: light, main & dark. So, I am also having 3 variations of brand color: v1, v2 & v3. v1 will represent light, v2 will represent main and v3 will represent dark. 

Instead of the name light, main and dark, I am having v1, v2 & v3 because I think that v=variation is actually making more sense. And in future, I can have v4 or v5, if I want. 
*/


/* 🔖 When you change the type 1 brand color, make sure to change the primary color and have the same color as the type 1 brand color. Similarly, When you change the type 2 brand color, make sure to change the secondary color and have the same color as the type 2 brand color.  */



/* 🔖 Color Review: 

cyan:  works really well with the dark mode but not that good with the light mode.  

deepOrange: works better in light mode but not bad in dark mode too. 

teal: works fine with both light and dark mode.

*/



export function brandColor(darkModeVariable) {


  return {

    brand: {
      // type 1
      t1: {
        v1: darkModeVariable ? teal[50] : teal[800],
        v2: darkModeVariable ? teal[100] : teal[700],
        v3: darkModeVariable ? teal[200] : teal[600],


        opp: {
          v1: darkModeVariable ? teal[800] : teal[50],
          v2: darkModeVariable ? teal[700] : teal[100],
          v3: darkModeVariable ? teal[600] : teal[200],

        }
      },


      // type 2
      t2: {
        v1: darkModeVariable ? deepOrange[50] : deepOrange[800],
        v2: darkModeVariable ? deepOrange[100] : deepOrange[700],
        v3: darkModeVariable ? deepOrange[200] : deepOrange[600],



        opp: {
          v1: darkModeVariable ? deepOrange[800] : deepOrange[50],
          v2: darkModeVariable ? deepOrange[700] : deepOrange[100],
          v3: darkModeVariable ? deepOrange[600] : deepOrange[200],

        }
      },

    },


    // specific color
    brand_light: {

      // type 1
      t1: {
        v1: teal[50],
        v2: teal[100],
        v3: teal[200],
      },

      // type 2
      t2: {
        v1: deepOrange[50],
        v2: deepOrange[100],
        v3: deepOrange[200],
      }
    },


    brand_dark: {

      // type 1
      t1: {
        v1: teal[800],
        v2: teal[700],
        v3: teal[600],
      },

      // type 2
      t2: {
        v1: deepOrange[800],
        v2: deepOrange[700],
        v3: deepOrange[600],
      }
    },


  }

}