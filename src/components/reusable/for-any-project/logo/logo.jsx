// mui
import { useTheme } from '@mui/material'

// style
import { STYLED_LOGO } from './style'



// component
import STYLED_LINK from 'styles/styled-components/router-link/router-link'
import SVG_JSX_LOGO_BRAND from './svg-jsx-logo-brand/svg-jsx-logo-brand'





// ✅ functional component
export default function LOGO(props) {

    const theme = useTheme()

    /* 🔖this component will be used in multiple other components. Not everywhere the logo's color's lightness should be same. So, having optional props for colors of the logo. But not having any prop for title's text color because it inherits the parent color. So, title's text color will inherit its parent's text color where ever this component will be used.  Remember, the following props are optional.  I am manually checking and providing value if no props is passed. I could have used default props syntax but I haven't used because I can't access theme color in the defaultProps object. */
  

    return (

        <>

            {/* Logo & Title */}

            <STYLED_LINK to='/'>

                <STYLED_LOGO>

                    {theme.palette.mode === 'dark' ?

                        <SVG_JSX_LOGO_BRAND firstColor={props.logo_dark_mode_color ? props.logo_dark_mode_color : theme.palette.primary.static_variant.light_1  } />
                        :
                        <SVG_JSX_LOGO_BRAND firstColor={props.logo_dark_mode_color ? props.logo_dark_mode_color : theme.palette.primary.static_variant.dark_1  } />
                    }

                    <h4 className='_font_lobster'>RecycleVehicles</h4>

                </STYLED_LOGO>

            </STYLED_LINK>

        </>

    )
}





