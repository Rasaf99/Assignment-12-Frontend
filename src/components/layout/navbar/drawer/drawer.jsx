// styles
import { STYLED_DRAWER_CONTENT_WRAPPER } from './style.js'

// components
import { Box, Drawer } from '@mui/material'

import MENU_ICON_LOGO_TITLE_ON_DRAWER from './menu-icon-logo-title-on-drawer.jsx/menu-icon-logo-title-on-drawer.jsx';
import NAV_ITEMS from './nav-items/nav-items.jsx';


// ✅ functional component
export default function DRAWER(props) {

  // these props are from navbar-sidebar-with-mui.jsx
  const { showDrawer, handleClose } = props


  // ✅ jsx
  return (

    <>

      <Drawer anchor='left' open={showDrawer} onClose={handleClose}>

        <STYLED_DRAWER_CONTENT_WRAPPER>

          <MENU_ICON_LOGO_TITLE_ON_DRAWER handleClose={handleClose} />

         <Box sx={{marginTop:'1rem'}}>

          <NAV_ITEMS />

         </Box>

        </STYLED_DRAWER_CONTENT_WRAPPER>

      </Drawer>

    </>

  )
}




