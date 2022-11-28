// hook
import { useState, useContext } from "react";

// custom hook
import useAuthContext from "hook/context/use-auth-context";

// style
import STYLED_LINK from "styles/styled-components/router-link/router-link";
import { STYLED_NAVBAR, STYLED_BUTTON } from './style'

// components
import { Button } from "@mui/material";

import HAMBURGER_ICON_LOGO_TITLE from "./menu-icon-logo-title-on-navbar/menu-icon-logo-title-on-navbar";
import DRAWER from "./drawer/drawer";
import PROFILE_POPOVER from "./profile-popover/profile-popover";
import STYLED_LIGHT_CONTAINED_BUTTON from "styles/styled-components/button/styled-light-contained-button";






// ✅ functional component
export default function NAVBAR() {




  const [showDrawer, setShowDrawer] = useState(false);

  const handleClick = () => {
    setShowDrawer(true)
  }

  const handleClose = () => {
    setShowDrawer(false)
  }



  // AuthContext
  const { user } = useAuthContext()

  



  // ✅ jsx
  return (

    <>

      <STYLED_NAVBAR>

        <HAMBURGER_ICON_LOGO_TITLE handleShowDrawer={handleClick} />

        {user?

          <PROFILE_POPOVER  />

          :

          <STYLED_LINK to='/login'>
            <STYLED_LIGHT_CONTAINED_BUTTON variant='contained'>Login</STYLED_LIGHT_CONTAINED_BUTTON>
          </STYLED_LINK>
        }

      </STYLED_NAVBAR>

      <DRAWER showDrawer={showDrawer} handleClose={handleClose} />


    </>
  )
}

