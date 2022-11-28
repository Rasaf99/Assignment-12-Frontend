import {blueGrey } from '@mui/material/colors';


export function theme_palette_grey(darkModeVariable) {

     

    return {

        grey: {

            // static (the default theme has these following properties)
            50: blueGrey[50],
            100: blueGrey[100],
            200: blueGrey[200],
            300: blueGrey[300],
            400: blueGrey[400],
            500: blueGrey[500],
            600: blueGrey[600],
            700: blueGrey[700],
            800: blueGrey[800],
            900: blueGrey[900],




            // dynamic(the default theme doesn't have the following properties)
            dynamic_variant: {

                light: darkModeVariable ? blueGrey[50] : blueGrey[600],
                main: darkModeVariable ? blueGrey[100] : blueGrey[700],
                dark: darkModeVariable ? blueGrey[200] : blueGrey[800],

            }


        }


    }

}