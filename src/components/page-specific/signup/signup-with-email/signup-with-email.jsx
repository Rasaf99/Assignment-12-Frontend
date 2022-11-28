// react hook
import { useEffect } from 'react';

//custom hook
import useAxios from 'hook/use-axios';
import useAuthContext from 'hook/context/use-auth-context';

// api
import authAxios from 'api/auth';

// router
import { useNavigate } from 'react-router-dom'

import STYLED_LINK from 'styles/styled-components/router-link/router-link';

// rhf
import { useForm } from 'react-hook-form';

// styles
import { STYLED_EMAIL_LOGIN_WRAPPER } from './style'

// react-toastify
import { toast } from 'react-toastify';


// components
import { Button } from '@mui/material'

import { MUI_RHF_INPUT, MUI_RHF_PASSWORD, MUI_RHF_RADIO } from 'components/reusable/for-any-project/mui-rhf-form'





// ✅ functional component
export default function SIGNUP_WITH_EMAIL() {


  const { handleSubmit, control, getValues, reset } = useForm({

    mode: 'onChange',

  })


  // useAxios() hook
  const { isSuccess, isError, isLoading, successResponse: signupResponse, errorResponse, axiosRequest } = useAxios()


  // useNavigate
  const navigate = useNavigate()

  // the following function will run after the form is submitted
  const submittedData = (allData) => {

    console.log('🐸 allData', allData)

    axiosRequest({
      axiosInstance: authAxios,
      method: 'POST',
      url: '/signup',

      body: {
        "username": `${allData.username}`,
        "email": `${allData.email}`,
        "password": `${allData.password}`,
        "passwordConfirm": `${allData.confirmPassword}`,
        "role": `${allData.role}`
      }

    })


    // reset the form
    reset()
  }



  // context
  const { dispatch } = useAuthContext()



  /*🔖 if the signup is successful, we will get the user as a response, we want to save that user in the local storage, update the AuthContext with a dispatch, also want to navigate to the page where the user wanted to visit */
  useEffect(() => {

    if (!isSuccess) return;

    localStorage.setItem("user", JSON.stringify(signupResponse))

    dispatch({ type: 'LOGIN', payload: signupResponse })

    navigate('/')

    toast.success('You have successfully signed up.')

  }, [isSuccess, signupResponse]);





  console.log('🐸 signup isLoading', isLoading)
  console.log('🐸 signup isSuccess', isSuccess)
  console.log('🐸 signup isError', isError)
  console.log('🐸 signup success response', signupResponse)
  console.log('🐸 signup error response', errorResponse)




  /* ✨ value and label for all radio buttons. These 'user_role_radio_array' will be passed as an prop to <MUI_RHF_RADIO/> component. */
  const user_role_radio_array = [
    {
      value: 'seller',
      label: 'Seller'
    },

    {
      value: 'buyer',
      label: 'Buyer'
    }
  ]




  // ✨ rules for form validation 
  const validationRules = {

    username: {
      required: 'Username is required',
      minLength: {
        value: 4,
        message: 'Username must be 4 characters long.'
      },
      maxLength: {
        value: 20,
        message: 'Username must not be longer than 20 characters.'
      },
      pattern: {
        value: /^[A-Za-z0-9_]*$/,
        message: "You can only use English letter, number & underscore."
      }
    },

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


    confirmPassword: {
      required: 'Password confirmation is required',
      validate: value => value === getValues('password') || "The passwords do not match"
    }

  }






  //✅ jsx
  return (

    <STYLED_EMAIL_LOGIN_WRAPPER onSubmit={handleSubmit(submittedData)} noValidate>


      {/* Username */}
      <MUI_RHF_INPUT control={control} label='Username' propertyName='username' validationObj={validationRules.username} variant='standard' />


      {/* Email */}
      <MUI_RHF_INPUT control={control} label='Email' propertyName='email' validationObj={validationRules.email} variant='standard' />

      {/* Password */}
      <MUI_RHF_PASSWORD control={control} label='Password' propertyName='password' validationObj={validationRules.password} variant='standard' />


      {/* Confirm Password */}
      <MUI_RHF_PASSWORD control={control} label='Confirm Password' propertyName='confirmPassword' validationObj={validationRules.confirmPassword} variant='standard' />


      {/* User Role */}
      <MUI_RHF_RADIO label='Are you a buyer or a seller?' propertyName='role' control={control} radioArray={user_role_radio_array} />




      {/* Forgot Password Link */}
      {/*
          <STYLED_LINK to='/'> <h5 className='forgot_password'>Forgot Password</h5></STYLED_LINK>

          */}

      {/* Signup Button */}
      <Button type="submit" disabled={isLoading} variant="contained">Signup</Button>


      {/* Backend Error */}
      <div style={{ display: 'none' }}>
        {isError && toast.error(errorResponse.message)}
      </div>



    </STYLED_EMAIL_LOGIN_WRAPPER>
  )
}
