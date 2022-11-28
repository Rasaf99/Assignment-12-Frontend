// rhf component
import { Controller } from 'react-hook-form';

// mui component 
import { FormControl, InputLabel, Input, OutlinedInput, FilledInput, FormHelperText } from '@mui/material'
import SHOW_TOAST from '../toastify/show-toast';



// ✅ functional component
export default function MUI_RHF_INPUT({ control, label, propertyName, inputFieldInitialValue, multiline, validationObj, errorToast, variant }) {



  /* 🔖 On <FormControl/> & <FormHelperText/> component, 'variant' prop needs to pass. There can be three values for this prop. In the following 'selectedVariant' function, writing the conditions for selecting the right value for the 'variant' prop. Later, we will call this function as the value of the 'variant' prop in <FormControl/> & <FormHelperText/> component.*/


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


          {/* 🔖 There are 3 variants to choose from. And for those 3 variants, there is 3 components. In the following code, I am conditionally picking the right component based on the selected variant. Each component has same props and those props has same value but I didn't get a way to write those props once and use in all 3 components, couldn't even do it with spread operator. Each prop has its task.  For example, you need the 'label' prop and give it the same value of the <InputLabel/> component, otherwise the UI will have bug while focusing on a input field. You can read more about other props in the MUI website. */}

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


MUI_RHF_INPUT.defaultProps = {
  inputFieldInitialValue: '',
  multiline: false,
  errorToast: false,
  variant: 'filled'

}