/*🔖 New type of code is explained in this file but if something is not explained, then may be that type of code is already explained in 'R_ReactHookForm_Name' component. */

// rhf component
import { Controller } from 'react-hook-form';

// mui component 
import { FormControl, FormLabel, FormHelperText, RadioGroup, FormControlLabel, Radio } from '@mui/material'




/* 🔖 On other similar kind of components, we receive 'variant' prop. But in this component, we are not receiving 'variant' prop as variant is not needed in this component. But we are receiving a new prop(radioArray) here.


Reason for receiving a new prop(radioArray): Other form input like name, password, etc just need 'name' and 'label' and so we pass them as 'propertyName' & 'label' prop. But 'radio' is different.  As there will be couple of radio buttons and we will put all those radio buttons under a group. Without MUI, we would wrap all the radio buttons under a <div/> and we would think that the <div/> is the radio group. But in MUI, there is a <RadioGroup/> component. And for this component, we need 'propertyName' & 'label' prop. And under this component, there will be multiple radio buttons & for writing a radio button, MUI has two components: <FormControlLabel/> & <Radio/>. We need a <FormControlLabel/> and a <Radio/> component for each radio button. As each button will have different value and label, we will need to write <FormControlLabel/> and <Radio/> component multiple time, the exact repetition number is depending on the amount of radio buttons. We can avoid this repetition with an array of objects(radioArray). Each object of that array will have value and label property. The page where this component will be called will have that Array of objects and the array(radioArray) will be passed down to this component as a prop.
 
*/


// ✅ functional component
export default function MUI_RHF_RADIO({ propertyName, label, control, radioArray }) {



  return (

    <Controller
      name={propertyName}
      control={control}

      /* the defaultValue will be radioArray's first object's value property. */
      defaultValue={`${radioArray[0].value}`}

      rules={{ required: 'You must select an option' }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl>


          {/* In other component, we are using <InputLabel/> but for radio buttons, we need to use <FormLabel/>*/}

          <FormLabel id={propertyName} sx={{textAlign:'left'}}>{label}</FormLabel>

          <RadioGroup
            value={value}
            onChange={onChange}
            error={!!error}
            sx={{ display: 'flex', flexDirection: 'row' }}>
            {

              radioArray.map((radio) => {
                return (
                  <FormControlLabel key={radio.value} value={radio.value} label={radio.label} control={<Radio />} />
                )
              })

            }
          </RadioGroup>


          <FormHelperText sx={{ color: 'error.main', m: 0 }} id={propertyName}>
            {error ? error.message : null}
          </FormHelperText>

        </FormControl>
      )}
    />
  )

}


MUI_RHF_RADIO.defaultProps = {
  variant: 'filled',

}