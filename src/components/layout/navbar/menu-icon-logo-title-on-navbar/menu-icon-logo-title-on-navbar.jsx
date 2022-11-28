// style
import { MENU_ICON_LOGO_TITLE_ON_NAVBAR } from './style'

// icon
import { AiOutlineMenu } from "react-icons/ai";

// components
import { IconButton, useTheme } from "@mui/material"
import LOGO from 'components/reusable/for-any-project/logo/logo';


// ✅ functional component
export default function HAMBURGER_ICON_LOGO_TITLE(props) {

    // these props are coming from 'navbar-sidebar-with-mui.jsx' file.
    const { handleShowDrawer } = props

    // mui theme
    const theme = useTheme()

    // ✅ jsx
    return (

        <MENU_ICON_LOGO_TITLE_ON_NAVBAR>

            {/* hamburger icon */}
            <IconButton onClick={handleShowDrawer} sx={{ fontSize: '1.6rem', color: 'inherit' }}>

                <AiOutlineMenu />

            </IconButton>


            {/* logo and title */}
            <LOGO logo_dark_mode_color={theme.palette.primary.static_variant.light_1} logo_light_mode_color={theme.palette.primary.static_variant.light_1} />

        </MENU_ICON_LOGO_TITLE_ON_NAVBAR>

    )
}