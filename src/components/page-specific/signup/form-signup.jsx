// useState
import { useState } from 'react';


// styles
import { STYLED_JSX_WRAPPER, STYLED_FORM } from './style'


// icons
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

// components
import { Button, Divider } from '@mui/material'

import STYLED_LINK from 'styles/styled-components/router-link/router-link';
import LOGO from 'components/reusable/for-any-project/logo/logo'
import SIGNUP_WITH_EMAIL from './signup-with-email/signup-with-email';




export default function FORM_SIGNUP() {


  // state to show and hide dropdown
  const [showDropdown, setShowDropdown] = useState(false)

  const handleClick = () => {

    setShowDropdown(!showDropdown)
  }



  return (

    <STYLED_JSX_WRAPPER>

      <STYLED_FORM>

        <LOGO />



        <h3 className='form_title'>Sign up</h3>

        {/* 
        <Button variant="contained" startIcon={<GoogleIcon />}>
          Signup With Google
        </Button>

        <Button variant="contained" startIcon={<FacebookIcon />}>
          Signup With Facebook
        </Button>

        <Divider />

        <Button onClick={handleClick} variant="contained" startIcon={<EmailIcon />}>
          Signup With Email
        </Button>

        {showDropdown &&

          <SIGNUP_WITH_EMAIL />

        }

      */}

        <SIGNUP_WITH_EMAIL />




        {/* extra (privacy policy & have an account) */}
        <div className='extra'>

          <h5>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</h5>

          <div className='have_an_account'>

            <h5> Have an account already?</h5>

            <STYLED_LINK to='/login'>
              <h5 className='log_in_link'>Log in</h5>
            </STYLED_LINK>

          </div>

        </div>


      </STYLED_FORM>

    </STYLED_JSX_WRAPPER>

  )
}
