/* 🔖 This component will have no variant. So, less code than other input fields.*/


// rhf component
import { Controller } from 'react-hook-form';

// mui component 
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material'



// ✅ functional component
export default function MUI_RHF_CHECKBOX({ propertyName, label, control }) {


  return (

    <Controller
      name={propertyName}
      control={control}
      defaultValue=""
      rules={{ required: 'You must agree to the terms and conditions' }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl>

          <FormControlLabel
                value={value}
                onChange={onChange}
                error={!!error}
                control={<Checkbox />}
                label={label}
            />


          <FormHelperText sx={{ color: 'error.main', m: 0 }} id={propertyName}>
            {error ? error.message : null}
          </FormHelperText>

        </FormControl>
      )}
    />
  )

}


MUI_RHF_CHECKBOX.defaultProps = {
  variant: 'filled',
}