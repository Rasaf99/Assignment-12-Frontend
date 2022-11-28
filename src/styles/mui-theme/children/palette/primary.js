/* Commenting all the colors name */
// import { blueGrey, blueGrey, red, pink, orange, deepOrange, brown, blue, lightBlue, purple, indigo, cyan,  green, lightGreen, teal, yellow, amber, lime } from '@mui/material/colors';

import { teal} from '@mui/material/colors';



/*🔖 Hue is a degree on the color wheel from 0 to 360. (0, 0%, *) is grey, (4, 90%, *) is red, (14,100%, *) is deepOrange,  (16,25%, *) is brown, (36, 100%, *) is orange, (45,100%, *) is amber, (54, 100%, *) is yellow, (66, 70%, *) is lime, (88°, 50%, *) is lightGreen, (122,39%, *) is green,  (174, 100%, *) is teal, (187, 100%, *) is cyan, (199, 98%, *) is lightBlue, (200, 18%, *) is blueGrey, (207,86%, *) is blue, (231, 48%, *) is indigo, (262, 52%, *) is deepPurple, (291, 64%, *) is purple, (340, 82%, *) is pink.

Saturation is a percentage value. 0% means a shade of gray, and 100% is the full color. 

Lightness is also a percentage. 0% is black, 50% is neither light or dark, 100% is white */


const light_1 = `hsl(212, 100%, 92%)`
const light_2 = `hsl(212, 100%, 87%)`
const light_3 = `hsl(212, 100%, 82%)`


const dark_1 = `hsl(212, 100%, 7%)`
const dark_2 = 'hsl(212, 100%, 11%)'
const dark_3 = 'hsl(212, 100%, 15%)'



export function theme_palette_primary(darkModeVariable) {

   

    return {

        primary: {

            /*🔖 The light should be the lightest, then main should be little bit darker than light, then dark should be little bit more darker than main. The dark gets used for hover. */

            light: darkModeVariable ? light_1 : dark_3,
            main: darkModeVariable ? light_2 : dark_2,
            dark: darkModeVariable ? light_3 : dark_1,
            contrastText: darkModeVariable ? 'rgba(0, 0, 0, 0.87)' : '#fff',


            /*🔖 Suppose, we are in dark theme. The above properties would provide right color for the dark theme. But while we are in the dark theme, what would be the right color for the light theme? The following properties will provide that   */
            opposite_theme: {

                light: darkModeVariable ? dark_3 : light_1,
                main: darkModeVariable ? dark_2 : light_2,
                dark: darkModeVariable ? dark_1 : light_3,
                contrastText: darkModeVariable ? '#fff' : 'rgba(0, 0, 0, 0.87)',
            },


            /*🔖  All above properties are dynamic. They work both in dark and light theme. But the following properties are static. */
            static_variant: {

                light_1: light_1,
                light_2: light_2,
                light_3: light_3,

                dark_1: dark_1,
                dark_2: dark_2,
                dark_3: dark_3
            }


        }


    }

}