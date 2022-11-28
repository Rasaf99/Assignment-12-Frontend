/* 🔖 Password needs a separate component because when we type password, we don't want it to be visible like other input fields. Moreover to view what we have typed, we will need a icon button to toggle from show to hide or opposite_theme. */

// useState
import { useState } from 'react';

// rhf component
import { Controller } from 'react-hook-form';

// mui component 
import { FormControl, InputLabel, Input, OutlinedInput, FilledInput, FormHelperText, IconButton } from '@mui/material'

// icon
import Visibility from "@mui/icons-material//Visibility";
import VisibilityOff from "@mui/icons-material//VisibilityOff";
import SHOW_TOAST from '../toastify/show-toast';


// ✅ functional component
export default function MUI_RHF_PASSWORD({ control, label, propertyName, validationObj, errorToast, variant }) {



  const selectedVariant = () => {

    if (variant === 'standard') {
      return (
        "standard"
      )
    }

    else if (variant === 'filled') {
      return (
        "filled"
      )
    }

    else if (variant === 'outlined') {
      return (
        "outlined"
      )
    }

  }


  // state for showing and hiding Password 
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);




  return (

    <Controller
      name={propertyName}
      control={control}
      defaultValue=""
      rules={{ ...validationObj }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl variant={selectedVariant()}>

          <InputLabel htmlFor={propertyName}>{label}</InputLabel>



          {
            (() => {

              if (variant === 'standard') {
                return (
                  <Input
                    type={showPassword ? "text" : "password"}
                    id={propertyName}
                    fullWidth
                    label={label}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    // In the following prop, the toggle button is added.
                    endAdornment={
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                        {showPassword ? <VisibilityOff sx={{ fontSize: '1.5rem' }} /> : <Visibility sx={{ fontSize: '1.5rem' }} />}
                      </IconButton>
                    }
                  />
                )
              }

              else if (variant === 'filled') {
                return (
                  <FilledInput
                    type={showPassword ? "text" : "password"}
                    id={propertyName}
                    fullWidth
                    label={label}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    // In the following prop, the toggle button is added.
                    endAdornment={
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                        {showPassword ? <VisibilityOff sx={{ fontSize: '1.5rem' }} /> : <Visibility sx={{ fontSize: '1.5rem' }} />}
                      </IconButton>
                    }
                  />
                )
              }

              else if (variant === 'outlined') {
                return (
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    id={propertyName}
                    fullWidth
                    label={label}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    // In the following prop, the toggle button is added.
                    endAdornment={
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                        {showPassword ? <VisibilityOff sx={{ fontSize: '1.5rem' }} /> : <Visibility sx={{ fontSize: '1.5rem' }} />}
                      </IconButton>
                    }
                  />
                )
              }

            })()
          }


          {/* error toast or error message*/}

          {errorToast ?

            /*🔖 Even when we want to show toast, I will need to use FormHelperText component. Otherwise, UI will show weird extra error message. Maybe, it's a MUI bug. To hide that bug, we need to use FormHelperText component with 'display:none' property.  */


            <FormHelperText sx={{ display: 'none' }} id={propertyName}>

              {error ? <SHOW_TOAST errorMsg={error.message} /> : null}

            </FormHelperText>

            :

            <FormHelperText sx={{ color: 'error.main', textAlign: 'center' }} id={propertyName}>

              {error ? <p>{error.message}</p> : null}

            </FormHelperText>
          }


        </FormControl>
      )}
    />
  )

}


MUI_RHF_PASSWORD.defaultProps = {
  errorToast: false,
  variant: 'filled'

}