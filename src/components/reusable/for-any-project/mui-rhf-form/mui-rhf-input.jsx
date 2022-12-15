// rhf component
import { Controller } from 'react-hook-form';

// mui component 
import { FormControl, InputLabel, Input, OutlinedInput, FilledInput, FormHelperText } from '@mui/material'
import SHOW_TOAST from '../toastify/show-toast';



// ✅ functional component
export default function MUI_RHF_INPUT({ control, label, propertyName, inputFieldInitialValue, multiline, validationObj, errorToast, variant }) {




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




  return (

    <Controller
      name={propertyName}
      control={control}
      defaultValue={inputFieldInitialValue}
      rules={{ ...validationObj }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl variant={selectedVariant()}>

          <InputLabel htmlFor={propertyName}>{label}</InputLabel>


     
          {
            (() => {

              if (variant === 'standard') {
                return (
                  <Input
                    id={propertyName}
                    multiline={multiline}
                    minRows={4}
                    fullWidth
                    label={label}
                    autoComplete='&#6#+'
                    value={value}
                    onChange={onChange}
                    error={!!error}
                  />
                )
              }

              else if (variant === 'filled') {
                return (
                  <FilledInput
                    id={propertyName}
                    multiline={multiline}
                    minRows={4}
                    fullWidth
                    label={label}
                    autoComplete='&#6#+'
                    value={value}
                    onChange={onChange}
                    error={!!error}
                  />
                )
              }

              else if (variant === 'outlined') {
                return (
                  <OutlinedInput
                    id={propertyName}
                    multiline={multiline}
                    minRows={4}
                    fullWidth
                    label={label}
                    autoComplete='&#6#+'
                    value={value}
                    onChange={onChange}
                    error={!!error}
                  />
                )
              }
            })()
          }





          {/* error toast or error message*/}

          {errorToast ?

      

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


MUI_RHF_INPUT.defaultProps = {
  inputFieldInitialValue: '',
  multiline: false,
  errorToast: false,
  variant: 'filled'

}