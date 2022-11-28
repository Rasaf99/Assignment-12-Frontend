import { cyan } from '@mui/material/colors';


export function theme_palette_success(darkModeVariable) {

     

    return {

        success: {


            light: darkModeVariable ? cyan[50] : cyan[600],
            main: darkModeVariable ? cyan[100] : cyan[700],
            dark: darkModeVariable ? cyan[200] : cyan[800],
            contrastText: darkModeVariable ? 'rgba(0, 0, 0, 0.87)' : '#fff',


            opposite_theme: {

                light: darkModeVariable ? cyan[600] : cyan[50],
                main: darkModeVariable ? cyan[700] : cyan[100],
                dark: darkModeVariable ? cyan[800] : cyan[200],
                contrastText: darkModeVariable ? '#fff' : 'rgba(0, 0, 0, 0.87)',
            },


            static_variant: {

                light_1: cyan[50],
                light_2: cyan[100],
                light_3: cyan[200],

                dark_1: cyan[800],
                dark_2: cyan[700],
                dark_3: cyan[600]
            }


        }


    }

}