// react hook
import { useEffect } from 'react';

//custom hook
import useAxios from 'hook/use-axios';
import useAuthContext from 'hook/context/use-auth-context';

// api
import authAxios from 'api/auth';


// router
import { useNavigate, useLocation } from 'react-router-dom'

import STYLED_LINK from 'styles/styled-components/router-link/router-link';

// rhf
import { useForm } from 'react-hook-form';

// styles
import { STYLED_EMAIL_LOGIN_WRAPPER } from './style'


// react-toastify
import { toast } from 'react-toastify';

// components
import { Button } from '@mui/material'

import { MUI_RHF_INPUT, MUI_RHF_PASSWORD } from 'components/reusable/for-any-project/mui-rhf-form'
import userAxios from 'api/user';







// ✅ functional component
export default function LOGIN_WITH_EMAIL() {

  // useForm
  const { handleSubmit, control, reset } = useForm({

    mode: 'onChange',

  })



  // useAxios() hook
  const { isSuccess, isError, isLoading, successResponse: loginResponse, errorResponse, axiosRequest } = useAxios()


  // the following function will run after the form is submitted
  const submittedData = (allData) => {

    console.log(' ✅ login form data', allData)


    axiosRequest({
      axiosInstance: authAxios,
      method: 'POST',
      url: '/login',

      body: {
        "email": `${allData.email}`,
        "password": `${allData.password}`,
      }

    })





    reset()
  }



  // context
  const { dispatch } = useAuthContext()


  // router
  const navigate = useNavigate()
  const location = useLocation()
  const redirect = location.state?.from?.pathname || '/'



  /*🔖 if the login is successful, we will get the user as a response, we want to save that user in the local storage, update the AuthContext with a dispatch, also want to navigate to the page where the user wanted to visit */
  useEffect(() => {

    if (!isSuccess) return;

    localStorage.setItem("user", JSON.stringify(loginResponse))

    dispatch({ type: 'LOGIN', payload: loginResponse })

    navigate(redirect, { replace: true })


    toast.success('Welcome back!')



  }, [isSuccess, loginResponse]);





  console.log('🐸 login isLoading', isLoading)
  console.log('🐸 login isSuccess', isSuccess)
  console.log('🐸 login isError', isError)
  console.log('🐸 login success response', loginResponse)
  console.log('🐸 login error response', errorResponse)






  // ✨ rules for form validation 
  const validationRules = {

    email: {
      required: 'Email is required',
      pattern: {
        value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/,
        message: `Provide a valid Email`
      }
    },

    password: {
      required: 'Password is required.',
      minLength: {
        value: 8,
        message: 'Password must be 8 characters long.'
      },
      maxLength: {
        value: 32,
        message: 'Password must not be longer than 32 characters.'
      },
      pattern: {
        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)^[^ ]+$/,
        message: "Password must have at least one uppercase letter, one lowercase letter, one number, one special character & no space."
      }
    },

  }



  //✅ jsx
  return (

    <STYLED_EMAIL_LOGIN_WRAPPER onSubmit={handleSubmit(submittedData)} noValidate>


      {/* Email */}
      <MUI_RHF_INPUT control={control} label='Email' propertyName='email' validationObj={validationRules.email} variant='standard' />

      {/* Password */}
      <MUI_RHF_PASSWORD control={control} label='Password' propertyName='password' validationObj={validationRules.password} variant='standard' />



      {/* Forgot Password Link */}

      {/* 
          <STYLED_LINK to='/'> <h5 className='forgot_password'>Forgot Password</h5></STYLED_LINK>

          */}


      {/* Login Button */}
      <Button type="submit" disabled={isLoading} variant="contained">Log in</Button>


      {/* Backend Error */}
      <div style={{ display: 'none' }}>
        {isError && toast.error(errorResponse.message)}
      </div>


    </STYLED_EMAIL_LOGIN_WRAPPER>
  )
}
