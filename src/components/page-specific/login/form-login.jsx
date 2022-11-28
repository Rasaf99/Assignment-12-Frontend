// useState
import { useState } from 'react';


// styles
import { STYLED_JSX_WRAPPER, STYLED_FORM } from './style'

/*
// icons
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
*/

// components
import { Button, Divider } from '@mui/material'

import LOGIN_WITH_EMAIL from './login-with-email/login-with-email';
import STYLED_LINK from 'styles/styled-components/router-link/router-link';
import LOGO from 'components/reusable/for-any-project/logo/logo'




export default function FORM_LOGIN() {


  /* 
    // state to show and hide dropdown
    const [showDropdown, setShowDropdown] = useState(false)
  
    const handleClick = () => {
  
      setShowDropdown(!showDropdown)
    }
  
  */

  return (

    <STYLED_JSX_WRAPPER>

      <STYLED_FORM>

        <LOGO />



        <h3 className='form_title'>Log in</h3>

        {/* 
        <Button variant="contained" startIcon={<GoogleIcon />}>
          Login With Google
        </Button>

        <Button variant="contained" startIcon={<FacebookIcon />}>
          Login With Facebook
        </Button>

        <Divider />

      

        <Button onClick={handleClick} variant="contained" startIcon={<EmailIcon />}>
          Login With Email
        </Button>

        {showDropdown &&

          <LOGIN_WITH_EMAIL />

        }

      */}


        <LOGIN_WITH_EMAIL />


        {/* Not Member Signup Link */}
        <div className='not_a_member'>

          <h5> Don't have an account?</h5>

          <STYLED_LINK to='/signup'>
            <h5 className='sign_up_link'>Sign Up</h5>
          </STYLED_LINK>
        </div>


      </STYLED_FORM>

    </STYLED_JSX_WRAPPER>

  )
}
