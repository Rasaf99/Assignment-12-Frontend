import { Link } from "react-router-dom";

import { Box, Button, useTheme } from '@mui/material'

// CSS
import { wrapper_css, svg_css } from './style'
import SvgLight404 from "./illustration/svg-light-404";
import SvgDark404 from "./illustration/svg-dark-404";


// SVG Component






export default function NOT_FOUND() {

  const theme = useTheme()



  return (

    /* wrapper */

    <Box sx={{ ...wrapper_css }}>


      {/* svg < wrapper */}
      {theme.palette.mode === 'dark' ?

        <SvgLight404 sx={{ ...svg_css }}
        />

        :

        <SvgDark404 sx={{ ...svg_css }}
        />

      }

      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button>Back to Home</Button>
      </Link>

    </Box> /* End: wrapper */


  )
}

