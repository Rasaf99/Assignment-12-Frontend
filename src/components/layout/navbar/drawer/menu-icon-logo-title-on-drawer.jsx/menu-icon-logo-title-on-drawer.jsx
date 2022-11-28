// styles
import { STYLED_JSX_WRAPPER } from './style.js'

// icon
import { AiOutlineMenu } from "react-icons/ai";

// components
import { IconButton } from "@mui/material";
import LOGO from 'components/reusable/for-any-project/logo/logo';




// ✅ functional component
export default function MENU_ICON_LOGO_TITLE_ON_DRAWER(props) {

  // these props are from 'navbar-sidebar-with-dui.jsx' but they are coming here by getting drilled through 'drawer.jsx'
  const { handleClose } = props


  return (

    <STYLED_JSX_WRAPPER>

      {/*hamburger menu */}
      <IconButton onClick={handleClose} sx={{ fontSize: '1.6rem', color: 'inherit' }}>

        <AiOutlineMenu />

      </IconButton>


      {/* logo and title*/}
      <LOGO />

    </STYLED_JSX_WRAPPER>


  )
}